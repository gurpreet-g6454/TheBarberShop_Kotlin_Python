package com.example.barbershop

import android.util.Log
import io.socket.client.IO
import io.socket.client.Socket

class SocketConnection
{
    companion object
    {
        var mSocket: Socket? =   IO.socket("http://3.84.30.80:5000")


    }

}