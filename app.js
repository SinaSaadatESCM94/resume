$(document).ready(function (){
	$(".toolbar li").unbind("click");
	// welcom animaion----------------------------------
	const text = document.querySelector("header .fancy");
	const strText = text.textContent;
	const splitText = strText.split("");

	text.textContent = "";

	for (let i = 0; i < splitText.length; i++) {
		text.innerHTML += "<span>" + splitText[i] + "</span>";
	}

	let char = 0;
	let timer = setInterval(onTick, 50);

	function onTick (){
		const span = text.querySelectorAll("span")[char];
		span.classList.add("fade");
		char++;

		if (char === splitText.length) {
			complete();
			return;
		}
	}

	function complete (){
		clearInterval(timer);
		timer = null;
	}
	// end------------------------------------------------------

	const tl = new TimelineMax();

	$(".toolbar #introduction").click(function (){
		$(".toolbar li").removeClass("show");
		$(this).addClass("show");
		$("header #welcome").addClass("hide");
		$(".contents section").removeClass("show").addClass("hide");
		$(".contents #introduction").removeClass("hide").addClass("show");

		// animation of the page content
		tl
			.fromTo($("#introduction img"), 1, { y: "50px", opacity: 0 }, { y: "0px", opacity: 1 })
			.fromTo($("#introduction article h3"), 1, { x: "100px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.2")
			.fromTo($("#introduction article h1"), 1, { x: "100px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.5")
			.fromTo($("#introduction article p"), 1, { x: "100px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.7");
	});

	// ****************toolbar selection**************** //
	$(".toolbar #education").click(function (){
		$(".toolbar li").removeClass("show");
		$(this).addClass("show");
		$("header #welcome").addClass("hide");
		$(".contents section").removeClass("show").addClass("hide");
		$(".contents #education").removeClass("hide").addClass("show");

		// animation of this page contents
		tl
			.fromTo($("#education .university img"), 1, { y: "50px", opacity: 0 }, { y: "0px", opacity: 1 })
			.fromTo($("#education .university h3"), 1, { x: "-50px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.2")
			.fromTo($("#education .university .degree"), 1, { x: "-50px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.5")
			.fromTo($("#education .university .years"), 1, { x: "-50px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.7")
			.fromTo($("#education .school img"), 1, { y: "50px", opacity: 0 }, { y: "0px", opacity: 1 })
			.fromTo($("#education .school h3"), 1, { x: "-50px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.2")
			.fromTo($("#education .school .degree"), 1, { x: "-50px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.5")
			.fromTo($("#education .school .years"), 1, { x: "-50px", opacity: 0 }, { x: "0px", opacity: 1 }, "=-0.7");
	});

	$(".toolbar #expriences").click(function (){
		$(".toolbar li").removeClass("show");
		$(this).addClass("show");
		$("header #welcome").addClass("hide");
		$(".contents section").removeClass("show").addClass("hide");
		$(".contents #expriences").removeClass("hide").addClass("show");

		const activityTitles = $("#expriences #titles .activity");
		const activityDetails = $("#expriences #details .detail");

		// animations for experiences opening and showing titels
		for (let i = 0; i < activityTitles.length; i++) {
			tl.fromTo(activityTitles[i], 2, { x: "-100%" }, { x: "0%" }, "=-1");
		}

		// animations for showing and hidding details by hovering
		activityTitles.mouseenter(function (){
			const activeId = $(this).attr("id");
			const shownDetail = $(`#expriences #details #${activeId}`)[0];
			// to add and remove show/hide to details
			for (let i = 0; i < activityDetails.length; i++) {
				activityDetails[i].classList = "detail hide";
			}
			shownDetail.className = "detail show";
			tl.fromTo(shownDetail, 1, { opacity: 0 }, { opacity: 1 });
		});
		// to hide all details by moving mouse over
		activityTitles.mouseleave(function (){
			for (let i = 0; i < activityDetails.length; i++) {
				activityDetails[i].classList = "detail hide";
			}
		});
		// animation for showing complete detail by clicking
		// later
	});

	$(".toolbar #skills").click(function (){
		$(".toolbar li").removeClass("show");
		$(this).addClass("show");
		$("header #welcome").addClass("hide");
		$(".contents section").removeClass("show").addClass("hide");
		$(".contents #skills").removeClass("hide").addClass("show");
		const skilltitles = $("#skills aside");
		// in case this page is opened for second time
		for (let i = 0; i < skilltitles.length; i++) {
			skilltitles[i].classList = "closed";
		}
		// animation for this page
		for (i = 0; i < skilltitles.length; i++) {
			tl.fromTo(skilltitles[i], 1, { left: "-100px", opacity: "0" }, { left: "0px", opacity: "0.6" }, "=0.3");
		}
		skilltitles.click(function (){
			for (let i = 0; i < skilltitles.length; i++) {
				if (skilltitles[i].classList == "opened") {
					tl
						.fromTo(
							$("#skills .opened h1"),
							0.2,
							{ color: "#085bb9", fontSize: "2rem" },
							{ color: "#fff6f1", fontSize: "1.8rem" },
						)
						.fromTo($("#skills .opened .cover"), 0.1, { top: "50rem" }, { top: "10rem" }, "=-0.1");
					skilltitles[i].classList = "closed";
				}
			}
			$(this).removeClass("closed").addClass("opened");
			tl
				.fromTo($("#skills .opened h1"), 0.5, { color: "#fff6f1" }, { color: "#085bb9" })
				.fromTo($("#skills .opened .cover"), 2, { top: "10rem" }, { top: "50rem" }, "=-0.5");
		});
	});

	$(".toolbar #contact").click(function (){
		$(".toolbar li").removeClass("show");
		$(this).addClass("show");
		$("header #welcome").addClass("hide");
		$(".contents section").removeClass("show").addClass("hide");
		$(".contents #contact").removeClass("hide").addClass("show");

		// in case this page is opening for second time
		$("#contact .card .link")[0].textContent = "";
		// animation for opening
		tl
			.fromTo($("#contact .card"), 1, { height: "0%" }, { height: "40%", ease: Power2.easeInOut }, "=+0.5")
			.fromTo($("#contact .card"), 1, { width: "90%" }, { width: "60%", ease: Power2.easeInOut }, "=-0.8");

		$("#contact .card .contact").mouseenter(function (){
			$("#contact .card .link")[0].textContent = `${$(this).attr("href")}`;
		});
	});
});
