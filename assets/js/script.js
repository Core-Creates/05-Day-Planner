
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import Header from '../../common/Header/'
// import Masonry from '../../common/Masonry/'
// import { cardAction } from '../../store/actions/Cards'
// import Arrow_Down from '../../assets/img/arrow-down.svg'

function changeDay() {

    var el_monday = document.getElementById("monday");
    var el_tuesday = document.getElementById("tuesday");
    var el_wednesday = document.getElementById("wednesday");
    var el_thursday = document.getElementById("thursday");
    var el_friday = document.getElementById("friday");
    var el_saturday = document.getElementById("saturday");
    var el_sunday = document.getElementById("sunday");

    let container = document.querySelector(".container");

    el_monday.addEventListener("click", () => {
        // alert('monday schedule');
        let divForSchedule = document.createElement("div");
        divForSchedule.innerHTML = "<div class=\"card\">"+ "To Do: " +"</div>";
        container.appendChild(divForSchedule);
        // var newCard = "To Do: " + el_monday.getAttribute("title") + "<";
    });
    el_tuesday.addEventListener("click", () => {
        let divForSchedule = document.createElement("div");
        divForSchedule.innerHTML = "<div class=\"card\">"+ "To Do: " +"</div>";
        container.appendChild(divForSchedule);
    });
    el_wednesday.addEventListener("click", () => {
        let divForSchedule = document.createElement("div");
        divForSchedule.innerHTML = "<div class=\"card\">"+ "To Do: " +"</div>";
        container.appendChild(divForSchedule);
    });
    el_thursday.addEventListener("click", () => {
        let divForSchedule = document.createElement("div");
        divForSchedule.innerHTML = "<div class=\"card\">"+ "To Do: " +"</div>";
        container.appendChild(divForSchedule);
    });
    el_friday.addEventListener("click", () => {
        let divForSchedule = document.createElement("div");
        divForSchedule.innerHTML = "<div class=\"card\">"+ "To Do: " +"</div>";
        container.appendChild(divForSchedule);
    });
    el_saturday.addEventListener("click", () => {
        let divForSchedule = document.createElement("div");
        divForSchedule.innerHTML = "<div class=\"card\">"+ "To Do: " +"</div>";
        container.appendChild(divForSchedule);
    });
    el_sunday.addEventListener("click", () => {
        let divForSchedule = document.createElement("div");
        divForSchedule.innerHTML = "<div class=\"card\">"+ "To Do: " +"</div>";
        container.appendChild(divForSchedule);
    });
}