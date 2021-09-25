package com.example.barbershop

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import io.socket.client.Socket
import kotlinx.android.synthetic.main.activity_payment_info.*
import org.json.JSONException
import org.json.JSONObject

class PaymentInfo : AppCompatActivity() {
    var mSocket: Socket? = null
    var txtViewKey: TextView? = null
    var txtViewStatus: TextView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_payment_info)
        txtViewKey = findViewById(R.id.txtViewKey)
        txtViewStatus = findViewById(R.id.txtViewStatus)

        val intent = intent
        try {
            val jsonObject = JSONObject(intent.getStringExtra("PaymentDetails"))
            showOutput(jsonObject.getJSONObject("response"), intent.getStringExtra("PaymentAmount"))
        } catch (ex: JSONException) {
            ex.printStackTrace()
        }
        btnLogout2.setOnClickListener(View.OnClickListener {
            val intent = Intent(this@PaymentInfo, MainActivity::class.java)
            startActivity(intent)
        })
    }

    private fun showOutput(response: JSONObject, paymentAmount: String?) {
        try {
            txtViewKey!!.text = response.getString("id")
            txtViewStatus!!.text = response.getString("state")
            updatePayment()
        } catch (ex: JSONException) {
            ex.printStackTrace()
        }
    }

    private fun updatePayment() {

        mSocket  = SocketConnection.mSocket
        mSocket?.connect()

        mSocket?.emit("PaymentRecieved",PaymentDetails.userId,PaymentDetails.date,PaymentDetails.time)


    }
}