
$(document).ready(async function () {
    let infoStudent = false;
    let response = await fetch("http://localhost/get_info.php");
    const student = await response.json();
    let intervalRun;

    $("#start-student").on("click", function () {
        intervalRun = setInterval(function () {
            runCount(Math.floor(Math.random() * 100000));
            $("#test").scramble(200, 20, "alphabet", true);
        }, 1000);
    });

    $("#stop-student").on("click", function () {
        clearInterval(intervalRun);
        infoStudent = student[Math.floor(Math.random() * student.length)];
        let branch = infoStudent.code.substr(0, 2);
        let code = infoStudent.code.substr(2, 5);
        $('#test').text(branch);
        $("#test").scramble(200, 20, "alphabet", true);
        endCount(code);
        setTimeout(function () {
            Swal.fire({
                title: `Chúc mừng Sinh viên <br> <i>${infoStudent.name}</i> <br> Mã số <br> <i>${infoStudent.code}</i>`,
                showConfirmButton: false,
                showClass: {
                  popup: 'animate__animated animate__zoomInDown'
                },
                customClass: {
                    container: 'animate__animated animate__faster'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }, 7200);
    });
});

function runCount(number) {
    const options = {
        duration: 3,
        separator: "",
        decimal: "",
        startVal: 11111,
    };
    let demo = new countUp.CountUp("myTargetElement", number, options);

    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }
}

function endCount(number) {
    const options = {
        duration: 7,
        separator: "",
        decimal: "",
        startVal: 11111,
    };
    let demo = new countUp.CountUp("myTargetElement", number, options);

    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }
}
