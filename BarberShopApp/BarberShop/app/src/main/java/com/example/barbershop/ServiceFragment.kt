package com.example.barbershop


import android.app.DatePickerDialog
import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.fragment.navArgs
import com.example.barbershop.Model.User
import com.example.barbershop.databinding.FragmentServiceBinding
import com.squareup.moshi.JsonAdapter
import com.squareup.moshi.Moshi
import com.squareup.moshi.Types
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import io.socket.client.Socket
import io.socket.emitter.Emitter
import org.json.JSONObject
import java.text.SimpleDateFormat
import java.util.*


class ServiceFragment : Fragment() {

    var mSocket: Socket? = null
    private lateinit var binding : FragmentServiceBinding
    private val args: ServiceFragmentArgs by navArgs()
    var cal = Calendar.getInstance()
    private val myType = Types.newParameterizedType(List::class.java, User::class.java)


    override fun onCreateView(
            inflater: LayoutInflater, container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View {
        binding = FragmentServiceBinding.inflate(inflater, container, false)



        binding.editTextDateSelect.text = "--/--/----"
        if(args.userId != "") {
            binding.userId.setText(args.userId)
        }


        val dateSetListener = DatePickerDialog.OnDateSetListener { view, year, monthOfYear, dayOfMonth ->
            cal.set(Calendar.YEAR, year)
            cal.set(Calendar.MONTH, monthOfYear)
            cal.set(Calendar.DAY_OF_MONTH, dayOfMonth)
            updateDateInView()
        }

        // when you click on the button, show DatePickerDialog that is set with OnDateSetListener
        binding.btnSelectDate.setOnClickListener {
            activity?.let {
                DatePickerDialog(
                        it,
                        dateSetListener,
                        // set DatePickerDialog to point to today's date when it loads up
                        cal.get(Calendar.YEAR),
                        cal.get(Calendar.MONTH),
                        cal.get(Calendar.DAY_OF_MONTH)
                ).show()
            }
        }

        binding.btnAddService.setOnClickListener{
            if( binding.userId.text.toString() != "") {
                if(isAdded) {
                    val action = ServiceFragmentDirections.actionServiceFragmentToViewBookingFragment2(binding.userId.text.toString())
                    NavHostFragment.findNavController(this).navigate(action)
                }
            }
            else{
                requireActivity().runOnUiThread {
                    val myToast = Toast.makeText(
                            context,
                            "Please enter the Phone Number",
                            Toast.LENGTH_SHORT
                    )
                    myToast.show()
                }
            }
        }

        binding.btnLogout.setOnClickListener{
            val action = ServiceFragmentDirections.actionServiceFragmentToLoginFragment()
            NavHostFragment.findNavController(this).navigate(action)
        }

        mSocket  = SocketConnection.mSocket
        mSocket?.connect()



        mSocket?.emit("barber")

        mSocket?.on("getBarber", onBarberRequest)

        mSocket?.on("bookingSuccessful", onBookingSuccessfull)

        mSocket?.on("AlreadyBooked", bookingFailed)

        binding.btnSubmitBooking.setOnClickListener{

            val jsonParam = JSONObject()
            if(binding.spinnerBarberName.selectedItem != null) {
                if (binding.userId.text.toString() != "") {
                    jsonParam.put("userId", binding.userId.text)
                    jsonParam.put("bookingDate", binding.editTextDateSelect.text)
                    jsonParam.put("barberName", binding.spinnerBarberName.selectedItem.toString())
                    jsonParam.put("service", binding.spinnerBarberServices.selectedItem.toString())
                    jsonParam.put("startTime", binding.spinnerShift.selectedItem.toString())
                    jsonParam.put("paid", "n")

                    mSocket?.emit("bookingData", jsonParam)
                } else {
                    requireActivity().runOnUiThread {
                        val myToast = Toast.makeText(
                                context,
                                "Please Enter a valid phone number",
                                Toast.LENGTH_SHORT
                        )
                        myToast.show()
                    }
                }
            }

            else{
                requireActivity().runOnUiThread {
                    val myToast = Toast.makeText(
                            context,
                            "Please Select a Barber name",
                            Toast.LENGTH_SHORT
                    )
                    myToast.show()
                }
            }
        }
        return binding.root
    }

    var onBookingSuccessfull = Emitter.Listener {
        requireActivity().runOnUiThread {
            val myToast = Toast.makeText(context, "Booking Successful", Toast.LENGTH_SHORT)
            myToast.show()
            val intent = Intent(activity, pymentActivity::class.java)
            val myBundle = Bundle()
            myBundle.putDouble("PAYMENT", 20.0)
            intent.putExtras(myBundle)
            PaymentDetails.userId = binding.userId.text.toString()
            PaymentDetails.date = binding.editTextDateSelect.text.toString()
            PaymentDetails.time = binding.spinnerShift.selectedItem.toString()

            intent.putExtras(myBundle)
            startActivity(intent)
        }
    }

    var bookingFailed = Emitter.Listener {
        requireActivity().runOnUiThread {
            val myToast = Toast.makeText(
                    context,
                    "Already booked please select another time",
                    Toast.LENGTH_SHORT
            )
            myToast.show()
        }
    }

    var onBarberRequest = Emitter.Listener {
        val data = it[0] as String

        val moshi: Moshi = Moshi.Builder()
                .add(KotlinJsonAdapterFactory())
                .build()
        val adapter : JsonAdapter<List<User>> = moshi.adapter(myType)

        val dataList = adapter.fromJson(data)

        var barberNames  = mutableListOf<String>()
        if (dataList != null) {
            dataList.forEach{

                if (barberNames != null) {
                    it.name?.let { it1 -> barberNames.add(it1) }
                }
            }
        }

        val dataAdapter = ArrayAdapter<String>(
                requireActivity(),
                android.R.layout.simple_spinner_item,
                barberNames)
        dataAdapter.setDropDownViewResource(R.layout.support_simple_spinner_dropdown_item)
        requireActivity().runOnUiThread {
            binding.spinnerBarberName.adapter = dataAdapter
        }
    }

    private fun updateDateInView() {
        val myFormat = "dd/MM/yyyy" // mention the format you need
        val sdf = SimpleDateFormat(myFormat, Locale.US)
        binding.editTextDateSelect.text = sdf.format(cal.getTime())
    }

    override fun onDestroy() {
        super.onDestroy()
        mSocket?.disconnect()
    }


}