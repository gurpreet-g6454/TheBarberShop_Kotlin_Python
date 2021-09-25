package com.s300316454.trackchip;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText trackId;
    Button b1;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        trackId = (EditText) findViewById(R.id.trackingId);
        b1 = (Button) findViewById(R.id.trackItem);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v)
            {
                String id = trackId.getText().toString();

                if(id.length() >= 4)
                {
                    Intent intent = new Intent(v.getContext(), displayInformation.class);
                    v.getContext().startActivity(intent);
                }
                else
                {
                    Toast.makeText(MainActivity.this, "Tracking id should be at least 4 characters",
                            Toast.LENGTH_LONG).show();
                }
            }
        });
    }
}