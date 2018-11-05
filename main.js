$(document).ready(function () {

    $("#eye").click(function () {
        if ($("#password").attr("type") === "password") {
            $("#password").attr("type", "text");
            $(this).text('hide')
        } else {
            $("#password").attr("type", "password");
            $(this).text('show')
        }
    });

    $(".gender-wrapper input").click(function () {
        $(".gender-label").removeClass("checked");
        $(this).parent().addClass("checked");

    });

    function isJson(str) {
        try {
            JSON.parse(str)
        } catch (e) {
            return !1
        }
        return !0
    }

    function validateField() {
        console.log($(this).attr('id'));
        if ($(this).val() == "" || $(this).val() == null || $(this).val() == undefined) {
            $(this).parent().addClass('with-error').children('.error-message').html('this field is required').show();
        }
        else if ($(this).attr('type') == "email") {
            var emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,})?$/;
            if (!emailPattern.test($(this).val())) {
                $(this).parent().addClass('with-error').children('.error-message').html('Please enter a valid email address').show()
            }
            else {
                $(this).parent().removeClass('with-error used').children('.error-message').hide()
            }
        }
        else if ($(this).attr('type') == "text") {
            if ($(this).val().indexOf("\"") != -1 || $(this).val().indexOf("\'") != -1)
                $(this).parent().addClass('with-error').children('.error-message').html('This field allow entering all symbols except double and single quotes ').show()
                else if ($(this).attr('id') == 'birthday') {
                    var datePattern = /^(19|20)\d\d-(0\d|1[012])-(0\d|1\d|2\d|3[01])$/;
                    if (!datePattern.test($(this).val())) {
                        $(this).parent().addClass('with-error').children('.error-message').html('Please enter a valid date (YYYY-MM-DD').show()
                    }
                    else {
                        $(this).parent().removeClass('with-error used').children('.error-message').hide()
                    }
                }
            else {
                $(this).parent().removeClass('with-error used').children('.error-message').hide()
            }

        }
        
        else {
            $(this).parent().removeClass('with-error used').children('.error-message').hide()

        }
    }

    $('#form').on('submit', function (e) {
        e.preventDefault();
        $("input, select").each(validateField);
        if ($('.form .with-error').length == 0) {
            $.magnificPopup.open({
                items: {
                    src: '#my-popup',
                    type: 'inline'
                }
            });

        }
    });

    $("#birthday").datepicker({ dateFormat: 'yy-mm-dd' });
    $("input, select").each(function () {
        $(this).on('change', validateField);
    });

});