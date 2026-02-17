let isStudent = true, isTeacher = false
$(document).ready(function(){
    $("#StudentTab").click(function(){
        if(isStudent == false){
            $(".StudentLogin").toggle()
            $(".TeacherLogin").toggle()
            $("#StudentTab").css({"backgroundColor": "white", "color": "rgb(101, 68, 247)", "fontWeight": 700})
            $("#teacherTab").css({"backgroundColor": "transparent", "color": "black", "fontWeight": 400})
            isStudent = true
            isTeacher = false
        }
    })

    $("#teacherTab").click(function(){
        if(isTeacher == false){
            $(".TeacherLogin").toggle()
            $(".StudentLogin").toggle()
            $("#teacherTab").css({"backgroundColor": "white", "color": "rgb(101, 68, 247)", "fontWeight": 700})
            $("#StudentTab").css({"backgroundColor": "transparent", "color": "black", "fontWeight": 400})
            isTeacher = true
            isStudent = false
        }
    })
})