package com.example.barbershop
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.recyclerview.widget.RecyclerView
import com.example.barbershop.Model.Booking
import com.example.barbershop.databinding.ListItemBinding


class NotesListAdapter(private val bookingList: List<Booking>) :
    RecyclerView.Adapter<MyviewHolder>() {


    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyviewHolder  {
        val inflater = LayoutInflater.from(parent.context)
        val view = inflater.inflate(R.layout.list_item, parent, false)
        return  MyviewHolder (view)
    }

    override fun getItemCount() = bookingList.size

    override fun onBindViewHolder(holder: MyviewHolder, position: Int) {

            holder.bind(bookingList[position])

        }
    }

    class MyviewHolder(private val itemView :View ):RecyclerView.ViewHolder(itemView){

        var viewBooking : ViewBookingFragment = ViewBookingFragment()
        val binding = ListItemBinding.bind(itemView)
        fun bind(user : Booking){
            binding.phoneNo.text = user.userId
            binding.service.text = user.bookingDate
            binding.starttime.text = user.startTime
            binding.deleteButton.setOnClickListener{
                user.userId?.let { it1 -> user.bookingDate?.let { it2 -> user.startTime?.let { it3 -> viewBooking.delete(it1, it2, it3) } } }
            }

        }


    }
