//sidebar
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  //change sidebar button
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the icons class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the icons class
   }
  }

//input task
(function() {
  'use strict';
  var tasker = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.evalTasklist();
    },
    cacheDom: function() {
      this.taskInput = document.getElementById("input-task");
      this.addBtn = document.getElementById("add-task");
      this.tasklist = document.getElementById("tasks");
      this.tasklistChildren = this.tasklist.children;
      this.errorMessage = document.getElementById("error");
    },
    bindEvents: function() {
      this.addBtn.onclick = this.addTask.bind(this);
      this.taskInput.onkeypress = this.enterKey.bind(this);
    },
    evalTasklist: function() {
      var i, chkBox, delBtn;
      for (i = 0; i < this.tasklistChildren.length; i += 1) {

        chkBox = this.tasklistChildren[i].getElementsByTagName("input")[0];
        chkBox.onclick = this.completeTask.bind(this, this.tasklistChildren[i], chkBox);

        delBtn = this.tasklistChildren[i].getElementsByTagName("button")[0];
        delBtn.onclick = this.delTask.bind(this, i);
      }
    },
    render: function() {
      var taskLi, taskChkbx, taskVal, taskBtn, taskTrsh;
      taskLi = document.createElement("li");
      taskLi.setAttribute("class", "task");
      taskChkbx = document.createElement("input");
      taskChkbx.setAttribute("type", "checkbox");
      taskVal = document.createTextNode(this.taskInput.value);
      taskBtn = document.createElement("button");
      taskTrsh = document.createElement("i");
      taskTrsh.setAttribute("class", "bx bx-trash");
      taskBtn.appendChild(taskTrsh);

      taskLi.appendChild(taskChkbx);
      taskLi.appendChild(taskVal);
      taskLi.appendChild(taskBtn);

      this.tasklist.appendChild(taskLi);

    },
    completeTask: function(i, chkBox) {
      if (chkBox.checked) {
        i.className = "task completed";
      } else {
        this.incompleteTask(i);
      }
    },
    incompleteTask: function(i) {
      i.className = "task";
    },
    enterKey: function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        this.addTask();
      }
    },
    addTask: function() {
      var value = this.taskInput.value;
      this.errorMessage.style.display = "none";

      if (value === "") {
        this.error();
      } else {
        this.render();
        this.taskInput.value = "";
        this.evalTasklist();
      }
    },
    delTask: function(i) {
      this.tasklist.children[i].remove();
      this.evalTasklist();
    },
    error: function() {
      this.errorMessage.style.display = "block";
    }
  };

  tasker.init();
}());
 
 //Greetings
var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('lblGreetings').innerHTML =
        '<b>Hey,'+'<b>' + greet;