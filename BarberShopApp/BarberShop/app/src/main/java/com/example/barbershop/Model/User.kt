package com.example.barbershop.Model

import java.io.Serializable

class User : Serializable {
    var name: String? = null
    var email: String? = null
    var phoneNumber: String? = null
    var password: String? = null
    var role = 0
    var userId: String? = null

    constructor() {}

    //    String user_table = "CREATE TABLE " + USER_TABLE + " (user_id INTEGER PRIMARY KEY, name TEXT, username TEXT, email TEXT, phonenumber TEXT, password TEXT, role_id INTEGER)";
    constructor(name: String?, email: String?, phoneNumber: String?, password: String?, role_id: Int) {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.password = password
        this.role = role_id
        this.userId = phoneNumber
    }

    constructor(name: String?, phoneNumber: String?, password: String?) {
        this.name = name
        this.phoneNumber = phoneNumber
        this.password = password
    }
}