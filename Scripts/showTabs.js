let isClicked = false
let linkHash = window.location.hash;
$(document).ready(function(){
    $(".buttons .login").click(function(e){
        e.preventDefault()
        document.location.href = "Pages/Login_Page.html"
        window.scrollTo(0, 0)
    })

    $(".buttons .signup").click(function(e){
        e.preventDefault()
        document.location.href = "Pages/Registration_Page.html"
        window.scrollTo(0, 0)
    })

    $(".goToStudent").click(function(e){
        e.preventDefault()
        document.location.href = "Student_Dashboard.html"
        window.scrollTo(0, 0)
    })

    $(".goToTeacher").click(function(e){
        e.preventDefault()
        document.location.href = "Teacher_Dashboard.html"
        window.scrollTo(0, 0)
    })

    $(".enrollBtn").click(function(e){
        e.preventDefault()
        document.location.href = "Exam_Enrollment.html"
        window.scrollTo(0, 0)
    })

    $(".enrollInTheExam").click(function(e){
        e.preventDefault()
        document.location.href = "Live_Exam.html"
        window.scrollTo(0, 0)
    })

    $(".submitTheExam").click(function(e){
        e.preventDefault()
        document.location.href = "Exam_Submition.html"
        window.scrollTo(0, 0)
    })

    $(".addNewExam").click(function(e){
        e.preventDefault()
        document.location.href = "Exam_Creation_Info.html"
        window.scrollTo(0, 0)
    })



    $(".studentBody .tabs li:nth-of-type(1)").click(function(){
        $("head title").text("Student Dashboard")
        $("#resultsHeader").show();
        $("#profileManager").hide();
        $("#examsHeader").hide();
        $("#accountSettings").hide();
        $(".studentResultTab").css("display", "flex")
        $(".studentAllExamsTab").css("display", "none")
        $(".settingsTab").css("display", "none")
        $(".profileTab").css("display", "none")
        $("aside .up .tabs li:nth-child(1)").css({"background-color":"rgba(255, 255, 255, 0.137)", "border-left":"4px solid white"})
        $("aside .up .tabs li:nth-child(1) i").css("color", "white")
        $("aside .up .tabs li:nth-child(3), aside .up .tabs li:nth-child(2)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(3) i, aside .up .tabs li:nth-child(2) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    $(".studentBody .tabs li:nth-of-type(2)").click(function(){
        $("head title").text("All Exams")
        $("#examsHeader").show();
        $("#resultsHeader").hide();
        $("#profileManager").hide();
        $("#accountSettings").hide();
        $(".studentAllExamsTab").css("display", "flex")
        $(".studentResultTab").css("display", "none")
        $(".settingsTab").css("display", "none")
        $(".profileTab").css("display", "none")
        $("aside .up .tabs li:nth-child(2)").css({"background-color":"rgba(255, 255, 255, 0.137)", "border-left":"4px solid white"})
        $("aside .up .tabs li:nth-child(2) i").css("color", "white")
        $("aside .up .tabs li:nth-child(1), aside .up .tabs li:nth-child(3)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(1) i, aside .up .tabs li:nth-child(3) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    $(".studentBody .tabs li:nth-of-type(3)").click(function(){
        $("head title").text("Profile Manager")
        $("#profileManager").show();
        $("#resultsHeader").hide();
        $("#examsHeader").hide();
        $("#accountSettings").hide();
        $(".profileTab").css("display", "flex")
        $(".studentAllExamsTab").css("display", "none")
        $(".settingsTab").css("display", "none")
        $(".studentResultTab").css("display", "none")
        $("aside .up .tabs li:nth-child(3)").css({"background-color":"rgba(255, 255, 255, 0.137)", "border-left":"4px solid white"})
        $("aside .up .tabs li:nth-child(3) i").css("color", "white")
        $("aside .up .tabs li:nth-child(1), aside .up .tabs li:nth-child(2)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(1) i, aside .up .tabs li:nth-child(2) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    $(".studentBody .settingsBtn").click(function(){
        $("head title").text("Settings")
        $("#accountSettings").show();
        $("#profileManager").hide();
        $("#resultsHeader").hide();
        $("#examsHeader").hide();
        $(".settingsTab").css("display", "flex")
        $(".profileTab").css("display", "none")
        $(".studentAllExamsTab").css("display", "none")
        $(".studentResultTab").css("display", "none")
        $("aside .up .tabs li:nth-child(1), aside .up .tabs li:nth-child(2), aside .up .tabs li:nth-child(3)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(1) i, aside .up .tabs li:nth-child(2) i, aside .up .tabs li:nth-child(3) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    $(".firstSectionTab .cancel").click(function(){
        $(".firstSectionTab").show();
        $(".secondSectionTab").hide();
        $(".thirdSectionTab").hide();
        window.scrollTo(0, 0)
        document.location.href = "./Teacher_Dashboard.html"
    })

    $(".firstSectionTab .continue").click(function(){
        $(".secondSectionTab .sections").show();
        $(".firstSectionTab .mainSection").hide();
        $(".thirdSectionTab .additionalInfo").hide();
        $(".secondSectionTab").show();
        $(".firstSectionTab").hide();
        $(".thirdSectionTab").hide();
        $(".firstSection").removeClass("active").addClass("complete");
        $(".secondSection").removeClass("complete").addClass("active");
        $(".thirdSection").removeClass("active complete").css({"background-color": "white","border-color": "#e0e0e0","color": "#a0a0a0"});
        $(".sectionsBar").removeClass("first1 third3").addClass("second2");
        window.scrollTo(0, 0)
    });

    $(".secondSectionTab .previousSection").click(function(){
        $(".firstSectionTab .mainSection").show();
        $(".secondSectionTab .sections").hide();
        $(".thirdSectionTab .additionalInfo").hide();
        $(".firstSectionTab").show();
        $(".secondSectionTab").hide();
        $(".thirdSectionTab").hide();
        $(".firstSection").removeClass("complete").addClass("active");
        $(".secondSection").removeClass("active complete").css({"background-color": "white","border-color": "#e0e0e0","color": "#a0a0a0"});
        $(".thirdSection").removeClass("active complete").css({"background-color": "white","border-color": "#e0e0e0","color": "#a0a0a0"});
        $(".sectionsBar").removeClass("second2 third3").addClass("first1");
        window.scrollTo(0, 0)
    });

    $(".secondSectionTab .continue").click(function(){
        $(".thirdSectionTab .additionalInfo").show();
        $(".secondSectionTab .sections").hide();
        $(".firstSectionTab .mainSection").hide();
        $(".thirdSectionTab").show();
        $(".firstSectionTab").hide();
        $(".secondSectionTab").hide();
        $(".firstSection").removeClass("active").addClass("complete");
        $(".secondSection").removeClass("active").addClass("complete");
        $(".thirdSection").removeClass("complete").addClass("active");
        $(".thirdSection").removeClass("complete").css({"background-color": "#5c7cfa","border-color": "#5c7cfa","color": "white"});
        $(".secondSection").removeClass("active").css({"background-color": "#40c057","border-color": "#40c057","color": "white"});
        $(".sectionsBar").removeClass("first1 second2").addClass("third3");
        window.scrollTo(0, 0)
    });

    $(".thirdSectionTab .back").click(function(){
        $(".secondSectionTab .sections").show();
        $(".firstSectionTab .mainSection").hide();
        $(".thirdSectionTab .additionalInfo").hide();
        $(".secondSectionTab").show();
        $(".firstSectionTab").hide();
        $(".thirdSectionTab").hide();
        $(".firstSection").removeClass("active").addClass("complete");
        $(".secondSection").removeClass("complete").addClass("active");
        $(".thirdSection").removeClass("active complete").css({"background-color": "white","border-color": "#e0e0e0","color": "#a0a0a0"});
        $(".secondSection").removeClass("complete").css({"background-color": "#5c7cfa","border-color": "#5c7cfa","color": "white"});
        $(".sectionsBar").removeClass("first1 third3").addClass("second2");
        window.scrollTo(0, 0)
    });

    $(".thirdSectionTab .save").click(function(){
        $(".firstSectionTab .mainSection").hide();
        $(".secondSectionTab .sections").hide();
        $(".thirdSectionTab .additionalInfo").hide();
        $(".firstSectionTab").hide();
        $(".secondSectionTab").hide();
        $(".thirdSectionTab").show();
        document.location.href = "./Teacher_Dashboard.html"
        window.scrollTo(0, 0)
    })

    $(".teacherBody .dashboardTab").click(function(){
        $("head title").text("Teacher Dashboard")
        $("#dashboardHeader").show()
        $("#myExamsHeader").hide()
        $("#studentsHeader").hide()
        $("#profileHeader").hide()
        $("#settingsHeader").hide()
        $(".teacherDashboardTab").css("display", "flex")
        $(".teacherMyExamsTab").css("display", "none")
        $(".teacherStudentsTab").css("display", "none")
        $(".teacherProfileTab").css("display", "none")
        $(".teacherSettingsTab").css("display", "none")
        $("aside .up .tabs li:nth-child(1)").css({"background-color":"rgba(255, 255, 255, 0.137)", "border-left":"4px solid white"})
        $("aside .up .tabs li:nth-child(1) i").css("color", "white")
        $("aside .up .tabs li:nth-child(2), aside .up .tabs li:nth-child(3), aside .up .tabs li:nth-child(4)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(2) i, aside .up .tabs li:nth-child(3) i, aside .up .tabs li:nth-child(4) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    $(".teacherBody .myExamsTab").click(function(){
        $("head title").text("My Exams")
        $("#myExamsHeader").show()
        $("#dashboardHeader").hide()
        $("#studentsHeader").hide()
        $("#profileHeader").hide()
        $("#settingsHeader").hide()
        $(".teacherMyExamsTab").css("display", "flex")
        $(".teacherDashboardTab").css("display", "none")
        $(".teacherStudentsTab").css("display", "none")
        $(".teacherProfileTab").css("display", "none")
        $(".teacherSettingsTab").css("display", "none")
        $("aside .up .tabs li:nth-child(2)").css({"background-color":"rgba(255, 255, 255, 0.137)", "border-left":"4px solid white"})
        $("aside .up .tabs li:nth-child(2) i").css("color", "white")
        $("aside .up .tabs li:nth-child(1), aside .up .tabs li:nth-child(3), aside .up .tabs li:nth-child(4)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(1) i, aside .up .tabs li:nth-child(3) i, aside .up .tabs li:nth-child(4) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    $(".teacherBody .studentsTab").click(function(){
        $("head title").text("Student Management")
        $("#studentsHeader").show()
        $("#dashboardHeader").hide()
        $("#myExamsHeader").hide()
        $("#profileHeader").hide()
        $("#settingsHeader").hide()
        $(".teacherStudentsTab").css("display", "flex")
        $(".teacherDashboardTab").css("display", "none")
        $(".teacherMyExamsTab").css("display", "none")
        $(".teacherProfileTab").css("display", "none")
        $(".teacherSettingsTab").css("display", "none")
        $("aside .up .tabs li:nth-child(3)").css({"background-color":"rgba(255, 255, 255, 0.137)", "border-left":"4px solid white"})
        $("aside .up .tabs li:nth-child(3) i").css("color", "white")
        $("aside .up .tabs li:nth-child(1), aside .up .tabs li:nth-child(2), aside .up .tabs li:nth-child(4)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(1) i, aside .up .tabs li:nth-child(2) i, aside .up .tabs li:nth-child(4) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    $(".teacherBody .profileTab").click(function(){
        $("head title").text("Profile Manager")
        $("#profileHeader").show()
        $("#dashboardHeader").hide()
        $("#myExamsHeader").hide()
        $("#studentsHeader").hide()
        $("#settingsHeader").hide()
        $(".teacherProfileTab").css("display", "flex")
        $(".teacherDashboardTab").css("display", "none")
        $(".teacherMyExamsTab").css("display", "none")
        $(".teacherStudentsTab").css("display", "none")
        $(".teacherSettingsTab").css("display", "none")
        $("aside .up .tabs li:nth-child(4)").css({"background-color":"rgba(255, 255, 255, 0.137)", "border-left":"4px solid white"})
        $("aside .up .tabs li:nth-child(4) i").css("color", "white")
        $("aside .up .tabs li:nth-child(1), aside .up .tabs li:nth-child(2), aside .up .tabs li:nth-child(3)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(1) i, aside .up .tabs li:nth-child(2) i, aside .up .tabs li:nth-child(3) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    $(".teacherBody .settingsBtn").click(function(){
        $("head title").text("Settings")
        $("#settingsHeader").show()
        $("#dashboardHeader").hide()
        $("#myExamsHeader").hide()
        $("#studentsHeader").hide()
        $("#profileHeader").hide()
        $(".teacherSettingsTab").css("display", "flex")
        $(".teacherDashboardTab").css("display", "none")
        $(".teacherMyExamsTab").css("display", "none")
        $(".teacherStudentsTab").css("display", "none")
        $(".teacherProfileTab").css("display", "none")
        $("aside .up .tabs li:nth-child(1), aside .up .tabs li:nth-child(2), aside .up .tabs li:nth-child(3), aside .up .tabs li:nth-child(4)").css({"background-color":"transparent", "border-left":"none"})
        $("aside .up .tabs li:nth-child(1) i, aside .up .tabs li:nth-child(2) i, aside .up .tabs li:nth-child(3) i, aside .up .tabs li:nth-child(4) i").css("color", "gray")
        window.scrollTo(0, 0)
    })

    

    $(".appearance").click(function(){
        if(isClicked == false){
            $("body").css("background-color", "#121822")
            isClicked = true
        }
        else{
            $("body").css("background-color", "rgb(209, 247, 247)")
            isClicked = false
        }
    })

    
    if(linkHash) {
        switch(linkHash) {
            case '#resultsHeader':
                $(".tabs li:nth-of-type(1)").click();
                window.scrollTo(0, 0)
                break;
            case '#examsHeader':
                $(".tabs li:nth-of-type(2)").click();
                window.scrollTo(0, 0)
                break;
            case '#profileManager':
                $(".tabs li:nth-of-type(3)").click();
                window.scrollTo(0, 0)
                break;
            case '#accountSettings':
                $(".settingsBtn").click();
                window.scrollTo(0, 0)
                break;
        }
    }
})












