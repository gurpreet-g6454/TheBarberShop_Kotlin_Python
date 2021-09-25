package com.example.barbershop

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.navigation.fragment.findNavController
import com.example.barbershop.databinding.FragmentAddBarberBinding
import io.socket.client.IO
import io.socket.client.Socket
import io.socket.emitter.Emitter
import org.json.JSONObject
import java.net.URISyntaxException


class addBarber : Fragment() {

    var mSocket: Socket? = null
    lateinit var con: String

    lateinit var binding : FragmentAddBarberBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {

        }
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
        binding = FragmentAddBarberBinding.inflate(inflater, container, false)

        mSocket  = SocketConnection.mSocket
        mSocket?.connect()

        binding.submitButton.setOnClickListener{

            val jsonParam = JSONObject()
            jsonParam.put("userId", "1")
            jsonParam.put("name", binding.firstNameTextField.text)
            jsonParam.put("email", binding.emailTextField.text)
            jsonParam.put("phone", binding.phoneTextField.text)
            jsonParam.put("role", "1")


            mSocket?.emit("addBarber", jsonParam)
        }
        mSocket?.on("BarberAdded",printMessage)


        binding.logoutButton.setOnClickListener{

            val action = addBarberDirections.actionAddBarberToLoginFragment()
            findNavController().navigate(action)
        }


        return binding.root
    }

    var printMessage = Emitter.Listener {
        requireActivity().runOnUiThread {
            val myToast = Toast.makeText(context, "Barber Added Successful", Toast.LENGTH_SHORT)
            myToast.show()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        mSocket?.disconnect()
    }

}