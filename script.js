var ipsum =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

$(".lorem-ipsum").text(ipsum);

$("#footer").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$("#projects-btn").click(function () {
    $("html,body").animate({ scrollTop: $("#projects-target").offset().top }, "slow");
    return false;
});

$("#about-btn").click(function () {
    $("html,body").animate({ scrollTop: $("#about-target").offset().top }, "slow");
    return false;
});

$("#contact-btn").click(function () {
    $("html,body").animate({ scrollTop: $("#contact-target").offset().top }, "slow");
    return false;
});
