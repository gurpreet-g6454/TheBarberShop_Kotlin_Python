package com.example.barbershop


import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.MutableLiveData
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.barbershop.Model.Booking
import com.example.barbershop.databinding.FragmentViewBookingBinding
import com.squareup.moshi.JsonAdapter
import com.squareup.moshi.Moshi
import com.squareup.moshi.Types
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import io.socket.client.Socket
import io.socket.emitter.Emitter
import org.json.JSONObject


class ViewBookingFragment : Fragment() {

    var mSocket: Socket? = null
    private val args: ViewBookingFragmentArgs by navArgs()
    private val myType = Types.newParameterizedType(List::class.java, Booking::class.java)
    private lateinit var binding: FragmentViewBookingBinding
    private val livedata : MutableLiveData<List<Booking>> by lazy {
        MutableLiveData<List<Booking>>()
    }


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
         binding = FragmentViewBookingBinding.inflate(inflater, container, false)


        mSocket  = SocketConnection.mSocket
        mSocket?.connect()



        val jsonParam = JSONObject()

        jsonParam.put("userId", args.userid)


        mSocket?.emit("getBooking",args.userid)
        mSocket?.on("bookingDatasent",onBookingRecieved)

        requireActivity().runOnUiThread {
            livedata.observe(viewLifecycleOwner, {
                binding.usersRecyclerView.layoutManager = LinearLayoutManager(this.context)
                binding.usersRecyclerView.adapter = NotesListAdapter(it)

            })


        }
        binding.logoutButton.setOnClickListener{
            val action = ViewBookingFragmentDirections.actionViewBookingFragmentToLoginFragment()
            findNavController().navigate(action)
        }

        return binding.root
    }

    var onBookingRecieved = Emitter.Listener {

        val data = it[0] as String

        val moshi: Moshi = Moshi.Builder()
                .add(KotlinJsonAdapterFactory())
                .build()
        val adapter: JsonAdapter<List<Booking>> = moshi.adapter(myType)

        val dataList = adapter.fromJson(data)

        if(isAdded) {
            requireActivity().runOnUiThread {

                livedata.setValue(dataList)

            }
        }

    }

        fun delete(userId:String,date:String,startTime:String)
        {

            mSocket  = SocketConnection.mSocket
            mSocket?.connect()

            mSocket?.emit("deleteBooking",userId,date,startTime)

            mSocket?.emit("getBooking",userId)

        }



    override fun onDestroy() {
        super.onDestroy()
        mSocket?.disconnect()
    }


}