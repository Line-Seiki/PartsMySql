!function(s){function t(){var a;message=s(".message-input .form-control").val(),""!=s.trim(message)&&(a=(a=new Date).getHours()+":"+a.getMinutes(),a='<li class="sent"><div class="conversation"><div class="dropdown"><a href="javascript:void(0)" data-toggle="dropdown" class="dropdown-toggle"><i class="bx bx-dots-vertical-rounded fs-sm"></i></a><div class="dropdown-menu"><a href="javascript:void(0)" class="dropdown-item">Attachments</a><a href="javascript:void(0)" class="dropdown-item">Status</a><a href="javascript:void(0)" class="dropdown-item">Forward</a><a href="javascript:void(0)" class="dropdown-item">Copy</a></div></div><div class="profile-img"><img src="assets/images/users/avatar-1.jpg" alt="Header Avatar" class="online avatar avatar-xs me-0"></div><div class="text-msg"><p>'+message+'</p><span class="time-stamp">'+a+"</span></div></div>",s('<li class="sent">'+a+"</li>").appendTo(s(".user-messages ul")),s(".chat-input .form-control").val(null),s(".chat-list .active .media-body p").html('<span class="text-dark">You: </span>'+message))}["usermsg-scrollbar","chat","group","contact"].forEach(function(a){Scrollbar.init(document.getElementById(a))}),s("#profile .dropdown-item").click(function(){var a=s(this).attr("data-status");s(this).parents(".dropdown").find(".avatar").removeClass().addClass("avatar avatar-sm me-0 "+a)}),s(".chat-send-btn").click(function(){t(),s(".message-input .form-control").val(null)}),s(window).on("keydown",function(a){if(13==a.which)return t(),s(".message-input .form-control").val(null),!1})}(jQuery);