package com.example.barbershop.login

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.fragment.NavHostFragment
import com.example.barbershop.R
import com.example.barbershop.databinding.FragmentLoginBinding
import com.example.barbershop.database.RegisterDatabase
import com.example.barbershop.database.RegisterRepository


class LoginFragment : Fragment() {

    private lateinit var loginViewModel: LoginViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val binding: FragmentLoginBinding = DataBindingUtil.inflate(
            inflater,
            R.layout.fragment_login, container, false
        )

        val application = requireNotNull(this.activity).application

        val dao = RegisterDatabase.getInstance(application).registerDatabaseDao

        val repository = RegisterRepository(dao)

        val factory = LoginViewModelFactory(repository, application)

        loginViewModel = ViewModelProvider(this, factory).get(LoginViewModel::class.java)

        binding.myLoginViewModel = loginViewModel

        binding.lifecycleOwner = this

        loginViewModel.navigatetoRegister.observe(viewLifecycleOwner, Observer { hasFinished->
            if (hasFinished == true){
                Log.i("MYTAG","insidi observe")
                displayUsersList()
                loginViewModel.doneNavigatingRegiter()
            }
        })

        loginViewModel.errotoast.observe(viewLifecycleOwner, Observer { hasError->
            if(hasError==true){
                Toast.makeText(requireContext(), "Please fill all fields", Toast.LENGTH_SHORT).show()
                loginViewModel.donetoast()
            }
        })

        loginViewModel.errotoastUsername .observe(viewLifecycleOwner, Observer { hasError->
            if(hasError==true){
                Toast.makeText(requireContext(), "User doesnt exist,please Register!", Toast.LENGTH_SHORT).show()
                loginViewModel.donetoastErrorUsername()
            }
        })

        loginViewModel.errorToastInvalidPassword.observe(viewLifecycleOwner, Observer { hasError->
            if(hasError==true){
                Toast.makeText(requireContext(), "Please check your Password", Toast.LENGTH_SHORT).show()
                loginViewModel.donetoastInvalidPassword()
            }
        })

        loginViewModel._navigatetoAdmin.observe(viewLifecycleOwner, Observer { hasError->
            if(hasError==true){
                val action = LoginFragmentDirections.actionLoginFragmentToAddBarber()
               NavHostFragment.findNavController(this).navigate(action)

            }
        })

        loginViewModel.navigatetoUserDetails.observe(viewLifecycleOwner, Observer { hasFinished->
            if (hasFinished == true){
                Log.i("MYTAG","insidi observe")

                loginViewModel.inputUsername.value?.let { navigateUserDetails(it) }


                loginViewModel.doneNavigatingUserDetails()
            }
        })

        binding.bookAppointment.setOnClickListener{
            val action = LoginFragmentDirections.actionLoginFragmentToServiceFragment3()
            NavHostFragment.findNavController(this).navigate(action)
        }


        return binding.root
    }


    private fun displayUsersList() {
        Log.i("MYTAG","insidisplayUsersList")
        val action = LoginFragmentDirections.actionLoginFragmentToHomeFragment()
        NavHostFragment.findNavController(this).navigate(action)

    }

    private fun navigateUserDetails( id: String) {
        Log.i("MYTAG","insidisplayUsersList")
        val action = LoginFragmentDirections.actionLoginFragmentToServiceFragment(id)
        NavHostFragment.findNavController(this).navigate(action)
    }
}