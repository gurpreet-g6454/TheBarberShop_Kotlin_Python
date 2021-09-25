package com.example.barbershop

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.paypal.android.sdk.payments.*
import kotlinx.android.synthetic.main.activity_payment_info.*
import kotlinx.android.synthetic.main.activity_pyment.*
import org.json.JSONException
import java.math.BigDecimal

//import com.example.barbershop.Config.Config;
class pymentActivity : AppCompatActivity() {

    var txtViewPayment: TextView? = null
    override fun onDestroy() {
        stopService(Intent(this, PayPalService::class.java))
        super.onDestroy()
    }

    var amount = 20.0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pyment)
        val intent = Intent(this, PayPalService::class.java)
        intent.putExtra(PayPalService.EXTRA_PAYPAL_CONFIGURATION, config)
        startService(intent)
        BtnPayment.setOnClickListener(View.OnClickListener { makePayment() })

        button.setOnClickListener{
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }
    }

    private fun makePayment() {
        amount = intent.extras!!.getDouble("PAYMENT")
        val payPalPayment = PayPalPayment(
            BigDecimal(amount.toString()),
            "CAD",
            "Pay for service",
            PayPalPayment.PAYMENT_INTENT_SALE
        )
        val intent = Intent(this, PaymentActivity::class.java)
        intent.putExtra(PayPalService.EXTRA_PAYPAL_CONFIGURATION, config)
        intent.putExtra(PaymentActivity.EXTRA_PAYMENT, payPalPayment)
        startActivityForResult(intent, PAYPAL_REQUEST_CODE)



    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == PAYPAL_REQUEST_CODE) {
            if (resultCode == RESULT_OK) {
                val confirmation: PaymentConfirmation? =
                    data!!.getParcelableExtra(PaymentActivity.EXTRA_RESULT_CONFIRMATION)
                if (confirmation != null) {
                    try {
                        val paymentDetails = confirmation.toJSONObject().toString(4)
                        startActivity(
                            Intent(this, PaymentInfo::class.java)
                                .putExtra("PaymentDetails", paymentDetails)
                                .putExtra("PaymentAmount", amount)

                        )
                    } catch (ea: JSONException) {
                        ea.printStackTrace()
                    }
                }
            } else if (resultCode == RESULT_CANCELED) {
                Toast.makeText(this, "cancel", Toast.LENGTH_SHORT).show()
            }
        } else if (resultCode == PaymentActivity.RESULT_EXTRAS_INVALID) {
            Toast.makeText(this, "Invalid", Toast.LENGTH_SHORT).show()
        }
    }

    companion object {
        const val PAYPAL_REQUEST_CODE = 7171
        private val config = PayPalConfiguration()
            .environment(PayPalConfiguration.ENVIRONMENT_NO_NETWORK)
            .clientId("ASFOFjmuaKZlU_whNHS3wuu5gZNuRgNJyWULHj_0ouDk_qzuR7dGsyQO2pl66cdYUIPBwJw0HJqfrx_p")
    }
}