queueViewModel.pageReady(function (data) {
    pageid = $("body").attr("data-pageid");
    if (pageid == "queue") {
		$('body').on('DOMNodeInserted',function(){
			$(".alert-success #divEmailStatus").text("success text");
			$(".alert-error #divEmailStatus").text("error text");
		});
    }
});
