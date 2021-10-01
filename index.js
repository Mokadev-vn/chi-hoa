$(document).ready(function () {
    let infoStudent = false;
    setTimeout(function () {
        Swal.fire("Chúc Mừng!", `${infoStudent.name} mã sinh viên: ${infoStudent.code}`, "success");
    }, 10500);

    $("#random-student").on("click", function () {
        setInterval(function () {
            runCount(Math.floor(Math.random() * 1000000));
            $("#test").scramble(200, 20, "alphabet", true);
        }, 1000);

        // $("#test").scramble(200, 20, "alphabet", true);
        setTimeout(function () {
            infoStudent = {
                name: "Hoàng Tú",
                code: "PH258966",
            };
        }, 15000);
    });
});

function runCount(number) {
    const options = {
        duration: 3,
        separator: "",
        decimal: "",
        startVal: 111111,
    };
    let demo = new countUp.CountUp("myTargetElement", number, options);

    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }
}
