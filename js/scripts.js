(function($) {

    function createList(name) {
        return "<li>" + name + "</li>";
    }

    var form = $(".form"),
        input = form.find("input[name='name']"),
        list = $("<ul></ul>").insertBefore(form);

    form.on("submit", function(e) {

        e.preventDefault();

        var name = $.trim( input.val() );

        if(name === "") {
            input.addClass("invalid");
            return;
        }

        input.removeClass("invalid").val("");

        list.append( createList(name) );

    });

})(jQuery);