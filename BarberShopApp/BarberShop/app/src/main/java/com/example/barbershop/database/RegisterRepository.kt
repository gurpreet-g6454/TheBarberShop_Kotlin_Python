package com.example.barbershop.database

import android.util.Log
import androidx.lifecycle.LiveData

class RegisterRepository(private val dao: RegisterDatabaseDao) {

    val users = dao.getAllUsers()
    suspend fun insert(user: RegisterEntity) {
        return dao.insert(user)
    }

    suspend fun getUserName(userName: String,password:String):RegisterEntity?{
        Log.i("MYTAG", "inside Repository Getusers fun ")
        return dao.getUsername(userName,password)
    }


}