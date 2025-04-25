
$(function () {
    /* 1. Datepicker Functionality for the selecting birthday input */
    $("#birthday").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:+0",
        dateFormat: "dd.mm.yy"
    });

    /* 2. Autocomplete for programming languages */
    /* Declare the some data for the autocomplete. */
    /* If user make a different input is also accepted. */
    const languages = [
        "JavaScript", "Python", "Java", "C#", "C++", "C", "TypeScript",
        "Ruby", "Go", "Swift", "Kotlin", "PHP"
    ];
    $("#language").autocomplete({ source: languages });

    /* 3. Validation Usage */
    /* Check Validity control the browser's validation. */
    /* In The HTML we use type url, type mail etc. This Function will control the validation. */
    $("#infoForm").on("submit", function(e) {
        if (!this.checkValidity()) {
          e.preventDefault();
          this.reportValidity();
        } else {
            e.preventDefault();
            alert("The Form submitted!");
        }
      });
      
});
