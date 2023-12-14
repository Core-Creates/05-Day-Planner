
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
    var conode = container.childNodes.length;
    let container = document.querySelector(".container");

    el_monday.addEventListener("click", () => {
        window.reload();
    });
    el_tuesday.addEventListener("click", () => {
        window.reload();
    });
    el_wednesday.addEventListener("click", () => {
        window.reload();
    });
    el_thursday.addEventListener("click", () => {
        window.reload();
    });
    el_friday.addEventListener("click", () => {
        window.reload();
    });
    el_saturday.addEventListener("click", () => {
        window.reload();
    });
    el_sunday.addEventListener("click", () => {
        window.reload();
    });
}

function addTodo() {
    var el_Add = document.getElementById("addButton");
    let container = document.querySelector(".container");

    el_Add.addEventListener("click", () => {
        var conode = container.childNodes.length;
        var todoNum = "todo" + conode;
        let divForSchedule = document.createElement("div");
        divForSchedule.innerHTML = "<div id=\"todo " + conode + "\" class=\"card\">" + "To Do: " + "</div>";
        container.appendChild(divForSchedule);
    });
}

function getDate(date) {

}