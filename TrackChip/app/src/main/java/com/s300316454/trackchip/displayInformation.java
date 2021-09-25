package com.s300316454.trackchip;

import android.app.ListActivity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class displayInformation extends ListActivity {

    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        super.onListItemClick(l, v, position, id);

        switch (position)
        {
            case 0:

                break;
            case 1:

                break;
            case 2:

                break;

        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        //Will fetch the tracking information later from database using tracking Id

        //for now using hardcoded data
        String[] trackingInformation = {"Status : Delivered", "Courier : UPS","Transit time : 2 days"};

        setListAdapter(new ArrayAdapter<String>(
                this,
                R.layout.activity_tracking_information,
                R.id.details,
                trackingInformation));


    }
}