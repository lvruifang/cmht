$(function(){
	$(".list-group").find(".nrBox").hide();
        $(".adgroup-add-body-box").each(function(){
           var aInpu=$(this).find(".bg-gray label");
           $(aInpu).each(function(index,element){
             $(this).click(function(){
                 $(this).parents(".adgroup-add-body-box").find(".nrBox").hide();
                 $(this).parents(".adgroup-add-body-box").find(".nrBox").eq(index).slideDown();
            })
        })
    });

    $("#addBtn").click(function(){
        $("#addBox").show();
    });
    $("#addBox .baocun").click(function(){
        var arr=[];
        $("#geshi input").each(function(index,element){
            if($(this).is(':checked')){
                arr.push($(this).val());
            }
        });
        var txt=arr.join("\\")+"格式";
        if($("#addBox .miaoshu").val()!=""&&$("#addBox .kuan").val()!=""&&$("#addBox .gao").val()!=""&&$("#geshi input:checkbox:checked").length>0){
            var str='<p class="mt5" style="font-size:16px;color:#333;"><span style="margin-right:30px;">'+$("#addBox .miaoshu").val()+'</span><span style="margin-right:30px;">'+$("#addBox .kuan").val()+"x"+$("#addBox .gao").val()+'</span><span style="margin-right:30px;">'+txt+'</span><span class="shanchu" style="margin-right:30px;padding:5px 7px;border:solid 1px #ccc; display:inline-block;cursor:pointer;">删除</span></p>';
            $(str).insertBefore($("#addBtn"));
            $("#addBox").hide(); 
            $("#addBox .miaoshu").val("");
            $("#addBox .kuan").val("");
            $("#addBox .gao").val("");
            $("#geshi input").attr("checked",false);
        }else{
            alert("您的信息填写不完全");
        }

        $(".mediaZy .shanchu").click(function(){
            $(this).parent().remove();
        });
     });
})