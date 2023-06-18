var q0000_Name = "entry.1526945642"
var q0100_Name = "entry.2022183060"
var q0200_Name = "entry.1016150325"
var q0300_Name = "entry.326255673"
var q0400_Name = "entry.2130880281"
var q0500_Name = "entry.1272528959"
var q0600_Name = "entry.1282152750"
var q0700_Name = "entry.100345276"
var q0800_Name = "entry.1282044074"
var q0900_Name = "entry.648703495"
var q1000_Name = "entry.736852996"
var q1100_Name = "entry.1509469500"
var q1200_Name = "entry.1620273542"

var q2100_Name = "entry.952702009"
var q2200_Name = "entry.1501904404"
var q2300_Name = "entry.882894080"
var q2400_Name = "entry.1178048534"
var q2500_Name = "entry.889980155"
var q2600_Name = "entry.78421309"
var q2700_Name = "entry.1027685844"
var q2800_Name = "entry.324088381"
var q2900_Name = "entry.419721384"
var q3000_Name = "entry.1819835886"
var q3100_Name = "entry.669527008"
var q3200_Name = "entry.528426534"

var q4100_Name = "entry.1649380397"
var q4200_Name = "entry.1880512524"
var q4300_Name = "entry.889021294"
var q4400_Name = "entry.2033656708"
var q4500_Name = "entry.320963509"
var q4600_Name = "entry.1695309973"
var q4700_Name = "entry.1331140653"
var q4800_Name = "entry.592025355"
var q4900_Name = "entry.1765214542"
var q5000_Name = "entry.887826853"
var q5100_Name = "entry.2141519555"
var q5200_Name = "entry.13206860"




//種目の選択
function SportsEvent(ele){
    var eventId = ele.id
    //window.alert(eventId)
    var eventValue = document.getElementById(eventId).value
    //window.alert(eventValue)
    document.getElementById("03000").innerHTML = eventValue
}

//(1)質問1での分岐(H2)
function Q1_branch(ele){
    var qId = ele.id
    var Qs = [q0200_Name,q0300_Name,q0400_Name,q0500_Name,q0600_Name,q0700_Name,q0800_Name,q0900_Name,q1000_Name,q1100_Name,q1200_Name]
    if(qId == "01001"){
        document.getElementById("q2-4").style.display = "none";
        document.getElementById("q5-12").style.display = "none";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                //window.alert(Cs[j]);
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
    }else if(qId == "01002"){
        document.getElementById("q2-4").style.display = "block";
        document.getElementById("q5-12").style.display = "block";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q1100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }else if(qId == "01003"){
        document.getElementById("q2-4").style.display = "block";
        document.getElementById("q5-12").style.display = "block";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q1100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }else if(qId == "01004"){
        document.getElementById("q2-4").style.display = "none";
        document.getElementById("q5-12").style.display = "block";
        for(i=0;i<3;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
        for(i=3;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q1100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }
}

//(2)質問1での分岐(H2)
function Q1_branch_2(ele){
    var qId = ele.id
    var Qs = [q2200_Name,q2300_Name,q2400_Name,q2500_Name,q2600_Name,q2700_Name,q2800_Name,q2900_Name,q3000_Name,q3100_Name,q3200_Name]
    if(qId == "21001"){
        document.getElementById("(2)q2-4").style.display = "none";
        document.getElementById("(2)q5-12").style.display = "none";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                //window.alert(Cs[j]);
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
    }else if(qId == "21002"){
        document.getElementById("(2)q2-4").style.display = "block";
        document.getElementById("(2)q5-12").style.display = "block";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q3100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }else if(qId == "21003"){
        document.getElementById("(2)q2-4").style.display = "block";
        document.getElementById("(2)q5-12").style.display = "block";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q3100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }else if(qId == "21004"){
        document.getElementById("(2)q2-4").style.display = "none";
        document.getElementById("(2)q5-12").style.display = "block";
        for(i=0;i<3;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
        for(i=3;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q3100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }
}

//(3)質問1での分岐(H2)
function Q1_branch_3(ele){
    var qId = ele.id
    var Qs = [q4200_Name,q4300_Name,q4400_Name,q4500_Name,q4600_Name,q4700_Name,q4800_Name,q4900_Name,q5000_Name,q5100_Name,q5200_Name]
    if(qId == "41001"){
        document.getElementById("(3)q2-4").style.display = "none";
        document.getElementById("(3)q5-12").style.display = "none";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                //window.alert(Cs[j]);
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
    }else if(qId == "41002"){
        document.getElementById("(3)q2-4").style.display = "block";
        document.getElementById("(3)q5-12").style.display = "block";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q5100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }else if(qId == "41003"){
        document.getElementById("(3)q2-4").style.display = "block";
        document.getElementById("(3)q5-12").style.display = "block";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q5100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }else if(qId == "41004"){
        document.getElementById("(3)q2-4").style.display = "none";
        document.getElementById("(3)q5-12").style.display = "block";
        for(i=0;i<3;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
        for(i=3;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            if(Qs[i] !== q5100_Name){
                for(j=0;j<Cs.length;j++){
                    Cs[j].required = true;
                }
            }
        }
    }
}

//(1)質問5での分岐
function Q5_branch(ele){
    var qId = ele.id;
    //window.alert(ele.id)
    var kegaQ = document.getElementById("0500kega");
    var kegaC = document.getElementsByName(q0600_Name);
    var byokiQ = document.getElementById("0500byoki");
    var byokiC = document.getElementsByName(q0700_Name);
    if(qId == "05001"){
        kegaQ.style.display = "block";
        byokiQ.style.display = "none";
        for(i=0;i<byokiC.length;i++){
            byokiC[i].checked = false;
            byokiC[i].required = false;
        }
        document.getElementById("07026t").value = "";
    }else if(qId == "05002"){
        kegaQ.style.display = "none";
        byokiQ.style.display = "block";
        for(i=0;i<kegaC.length;i++){
            kegaC[i].checked = false;
            kegaC[i].required = false;
        }
        document.getElementById("06019t").value = "";
    }
}

//(2)質問5での分岐
function Q5_branch_2(ele){
    var qId = ele.id;
    //window.alert(ele.id)
    var kegaQ = document.getElementById("2500kega");
    var kegaC = document.getElementsByName(q2600_Name);
    var byokiQ = document.getElementById("2500byoki");
    var byokiC = document.getElementsByName(q2700_Name);
    if(qId == "25001"){
        kegaQ.style.display = "block";
        byokiQ.style.display = "none";
        for(i=0;i<byokiC.length;i++){
            byokiC[i].checked = false;
            byokiC[i].required = false;
        }
        document.getElementById("27026t").value = "";
    }else if(qId == "25002"){
        kegaQ.style.display = "none";
        byokiQ.style.display = "block";
        for(i=0;i<kegaC.length;i++){
            kegaC[i].checked = false;
            kegaC[i].required = false;
        }
        document.getElementById("26019t").value = "";
    }
}

//(3)質問5での分岐
function Q5_branch_3(ele){
    var qId = ele.id;
    //window.alert(ele.id)
    var kegaQ = document.getElementById("4500kega");
    var kegaC = document.getElementsByName(q4600_Name);
    var byokiQ = document.getElementById("4500byoki");
    var byokiC = document.getElementsByName(q4700_Name);
    if(qId == "45001"){
        kegaQ.style.display = "block";
        byokiQ.style.display = "none";
        for(i=0;i<byokiC.length;i++){
            byokiC[i].checked = false;
            byokiC[i].required = false;
        }
        document.getElementById("47026t").value = "";
    }else if(qId == "45002"){
        kegaQ.style.display = "none";
        byokiQ.style.display = "block";
        for(i=0;i<kegaC.length;i++){
            kegaC[i].checked = false;
            kegaC[i].required = false;
        }
        document.getElementById("46019t").value = "";
    }
}


//(1)質問6「わからない」クリア
function Q6tClear(ele){
    var ClearId = ele.id;
    if(document.getElementById(ClearId).checked == true){
        document.getElementById("06019t").value = "";
        document.getElementById("06019t").required = false;
    }
}

//(2)質問6「わからない」クリア
function Q6tClear_2(ele){
    var ClearId = ele.id;
    if(document.getElementById(ClearId).checked == true){
        document.getElementById("26019t").value = "";
        document.getElementById("26019t").required = false;
    }
}

//(3)質問6「わからない」クリア
function Q6tClear_3(ele){
    var ClearId = ele.id;
    if(document.getElementById(ClearId).checked == true){
        document.getElementById("46019t").value = "";
        document.getElementById("46019t").required = false;
    }
}

//（わからない）（その他）クリア【ラジオボタン】
function tClear(ele){
    var checkedId = ele.id;
    var wId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + "w";
    var wtId = wId + "t";
    var sId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + "s";
    var stId = sId + "t";

    var wORs = checkedId.charAt(4)
    if(wORs == "w"){
        document.getElementById(wtId).required = true;
        if(document.getElementById(stId)){
            document.getElementById(stId).value = "";
            document.getElementById(stId).required = false;
        }
    }else if(wORs == "s"){
        document.getElementById(stId).required = true;
        if(document.getElementById(wtId)){
            document.getElementById(wtId).value = "";
            document.getElementById(wtId).required = false;            
        }
    }else{
        if(document.getElementById(stId)){
            document.getElementById(stId).value = "";
            document.getElementById(stId).required = false;
        }
        if(document.getElementById(wtId)){
            document.getElementById(wtId).value = "";
            document.getElementById(wtId).required = false;
        }
    }
}

//（わからない）（その他）クリア【チェックボックス】
function checkClear(ele){
    var checkedId = ele.id;
    var wsId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4);
    var wstId = wsId + "t";
    if(document.getElementById(wsId).checked == true){
        document.getElementById(wstId).required = true;
    }else if(document.getElementById(wsId).checked == false){
        document.getElementById(wstId).required = false;
        document.getElementById(wstId).value = "";
    }
}

//(1)質問10記述部分の必須制御
function Q10Require(ele){
    var Q10Id = ele.id;
    if(Q10Id == "10001"){
        document.getElementById("10003n").value = "";
        document.getElementById("10003s").value = "";
        document.getElementById("10003n").required = false;
        document.getElementById("10003s").required = false;
        document.getElementById("10004n").value = "";
        document.getElementById("10004s").value = "";
        document.getElementById("10004n").required = false;
        document.getElementById("10004s").required = false;
    }else if(Q10Id == "10002"){
        document.getElementById("10003n").value = "";
        document.getElementById("10003s").value = "";
        document.getElementById("10003n").required = false;
        document.getElementById("10003s").required = false;
        document.getElementById("10004n").value = "";
        document.getElementById("10004s").value = "";
        document.getElementById("10004n").required = false;
        document.getElementById("10004s").required = false;
    }else if(Q10Id == "10003"){
        document.getElementById("10003n").required = true;
        document.getElementById("10003s").required = true;
        document.getElementById("10004n").value = "";
        document.getElementById("10004s").value = "";
        document.getElementById("10004n").required = false;
        document.getElementById("10004s").required = false;
    }else if(Q10Id == "10004"){
        document.getElementById("10004n").required = true;
        document.getElementById("10004s").required = true;
        document.getElementById("10003n").value = "";
        document.getElementById("10003s").value = "";
        document.getElementById("10003n").required = false;
        document.getElementById("10003s").required = false;
    }
}

//(2)質問10記述部分の必須制御
function Q10Require_2(ele){
    var Q10Id = ele.id;
    if(Q10Id == "30001"){
        document.getElementById("30003n").value = "";
        document.getElementById("30003s").value = "";
        document.getElementById("30003n").required = false;
        document.getElementById("30003s").required = false;
        document.getElementById("30004n").value = "";
        document.getElementById("30004s").value = "";
        document.getElementById("30004n").required = false;
        document.getElementById("30004s").required = false;
    }else if(Q10Id == "30002"){
        document.getElementById("30003n").value = "";
        document.getElementById("30003s").value = "";
        document.getElementById("30003n").required = false;
        document.getElementById("30003s").required = false;
        document.getElementById("30004n").value = "";
        document.getElementById("30004s").value = "";
        document.getElementById("30004n").required = false;
        document.getElementById("30004s").required = false;
    }else if(Q10Id == "30003"){
        document.getElementById("30003n").required = true;
        document.getElementById("30003s").required = true;
        document.getElementById("30004n").value = "";
        document.getElementById("30004s").value = "";
        document.getElementById("30004n").required = false;
        document.getElementById("30004s").required = false;
    }else if(Q10Id == "30004"){
        document.getElementById("30004n").required = true;
        document.getElementById("30004s").required = true;
        document.getElementById("30003n").value = "";
        document.getElementById("30003s").value = "";
        document.getElementById("30003n").required = false;
        document.getElementById("30003s").required = false;
    }
}

//(3)質問10記述部分の必須制御
function Q10Require_3(ele){
    var Q10Id = ele.id;
    if(Q10Id == "50001"){
        document.getElementById("50003n").value = "";
        document.getElementById("50003s").value = "";
        document.getElementById("50003n").required = false;
        document.getElementById("50003s").required = false;
        document.getElementById("50004n").value = "";
        document.getElementById("50004s").value = "";
        document.getElementById("50004n").required = false;
        document.getElementById("50004s").required = false;
    }else if(Q10Id == "50002"){
        document.getElementById("50003n").value = "";
        document.getElementById("50003s").value = "";
        document.getElementById("50003n").required = false;
        document.getElementById("50003s").required = false;
        document.getElementById("50004n").value = "";
        document.getElementById("50004s").value = "";
        document.getElementById("50004n").required = false;
        document.getElementById("50004s").required = false;
    }else if(Q10Id == "50003"){
        document.getElementById("50003n").required = true;
        document.getElementById("50003s").required = true;
        document.getElementById("50004n").value = "";
        document.getElementById("50004s").value = "";
        document.getElementById("50004n").required = false;
        document.getElementById("50004s").required = false;
    }else if(Q10Id == "50004"){
        document.getElementById("50004n").required = true;
        document.getElementById("50004s").required = true;
        document.getElementById("50003n").value = "";
        document.getElementById("50003s").value = "";
        document.getElementById("50003n").required = false;
        document.getElementById("50003s").required = false;
    }
}

//(1)質問10記述部分の重複削除
function Q10textClear(ele){
    var checkedId = ele.id;
    var qId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4);
    var nId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4) + "n";
    var sId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4) + "s";
    if(qId == "10003"){
        if(document.getElementById(nId).value != "" || document.getElementById(sId).value != ""){
            document.getElementById("10003n").required = true;
            document.getElementById("10003s").required = true;
            document.getElementById("10004n").value = "";
            document.getElementById("10004s").value = "";
            document.getElementById("10004n").required = false;
            document.getElementById("10004s").required = false;
        }
    }else if(qId == "10004"){
        if(document.getElementById(nId).value != "" || document.getElementById(sId).value != ""){
            document.getElementById("10004n").required = true;
            document.getElementById("10004s").required = true;
            document.getElementById("10003n").value = "";
            document.getElementById("10003s").value = "";
            document.getElementById("10003n").required = false;
            document.getElementById("10003s").required = false;
        }
    }
}

//(2)質問10記述部分の重複削除
function Q10textClear_2(ele){
    var checkedId = ele.id;
    var qId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4);
    var nId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4) + "n";
    var sId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4) + "s";
    if(qId == "30003"){
        if(document.getElementById(nId).value != "" || document.getElementById(sId).value != ""){
            document.getElementById("30003n").required = true;
            document.getElementById("30003s").required = true;
            document.getElementById("30004n").value = "";
            document.getElementById("30004s").value = "";
            document.getElementById("30004n").required = false;
            document.getElementById("30004s").required = false;
        }
    }else if(qId == "30004"){
        if(document.getElementById(nId).value != "" || document.getElementById(sId).value != ""){
            document.getElementById("30004n").required = true;
            document.getElementById("30004s").required = true;
            document.getElementById("30003n").value = "";
            document.getElementById("30003s").value = "";
            document.getElementById("30003n").required = false;
            document.getElementById("30003s").required = false;
        }
    }
}

//(3)質問10記述部分の重複削除
function Q10textClear_3(ele){
    var checkedId = ele.id;
    var qId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4);
    var nId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4) + "n";
    var sId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4) + "s";
    if(qId == "50003"){
        if(document.getElementById(nId).value != "" || document.getElementById(sId).value != ""){
            document.getElementById("50003n").required = true;
            document.getElementById("50003s").required = true;
            document.getElementById("50004n").value = "";
            document.getElementById("50004s").value = "";
            document.getElementById("50004n").required = false;
            document.getElementById("50004s").required = false;
        }
    }else if(qId == "50004"){
        if(document.getElementById(nId).value != "" || document.getElementById(sId).value != ""){
            document.getElementById("50004n").required = true;
            document.getElementById("50004s").required = true;
            document.getElementById("50003n").value = "";
            document.getElementById("50003s").value = "";
            document.getElementById("50003n").required = false;
            document.getElementById("50003s").required = false;
        }
    }
}


//「具体的に記入」入力時に「その他」「わからない」チェック
function gCheck(ele){
    var checkedId = ele.id;
    var gId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + checkedId.charAt(4);
    if(document.getElementById(checkedId).value != ""){
        document.getElementById(gId).checked = true;
    }else if(document.getElementById(checkedId).value == ""){
        document.getElementById(gId).checked = false;
    }
}


// Enterキーが押された時にSubmitされるのを抑制する
document.getElementById("form1").onkeypress = (e) => {
    // form1に入力されたキーを取得
    const key = e.keyCode || e.charCode || 0;
    // 13はEnterキーのキーコード
    if (key == 13) {
      // アクションを行わない
      e.preventDefault();
    }
}



//(1)質問7チェックボックス必須制御
function CheckRequire(ele){
    var count = 0;
    for(i=7001; i<=7026; i++){
        if(document.getElementById("0"+i).checked == true){
            count += 1;
        }
    }
    if(count >= 1){
        for(i=7001; i<=7026; i++){
            document.getElementById("0"+i).required = false;
            if(document.getElementById("07026").checked == false){
                document.getElementById("07026t").required = false;
            }
        }
    }
}

//(2)質問7チェックボックス必須制御
function CheckRequire_2(ele){
    var count = 0;
    for(i=7001; i<=7026; i++){
        if(document.getElementById("2"+i).checked == true){
            count += 1;
        }
    }
    if(count >= 1){
        for(i=7001; i<=7026; i++){
            document.getElementById("2"+i).required = false;
            if(document.getElementById("27026").checked == false){
                document.getElementById("27026t").required = false;
            }
        }
    }
}

//(3)質問7チェックボックス必須制御
function CheckRequire_3(ele){
    var count = 0;
    for(i=7001; i<=7026; i++){
        if(document.getElementById("4"+i).checked == true){
            count += 1;
        }
    }
    if(count >= 1){
        for(i=7001; i<=7026; i++){
            document.getElementById("4"+i).required = false;
            if(document.getElementById("47026").checked == false){
                document.getElementById("47026t").required = false;
            }
        }
    }
}


//2回目を表示
function Display_2nd(ele){
    var checkedId = ele.id;
    var checkedValue = document.getElementById(checkedId).value;
    var Qs = [q2200_Name,q2300_Name,q2400_Name,q2500_Name,q2600_Name,q2700_Name,q2800_Name,q2900_Name,q3000_Name,q3100_Name,q3200_Name,q4200_Name,q4300_Name,q4400_Name,q4500_Name,q4600_Name,q4700_Name,q4800_Name,q4900_Name,q5000_Name,q5100_Name,q5200_Name]
    if(checkedValue == "はい"){
        document.getElementById("2nd").style.display = "block";
        var Cs = document.getElementsByName(q2100_Name);
        for(j=0;j<Cs.length;j++){
            Cs[j].required = true;
        }
    }else if(checkedValue == "いいえ"){
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                //window.alert(Cs[j]);
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
    }
}

//3回目を表示
function Display_3rd(ele){
    var checkedId = ele.id;
    var checkedValue = document.getElementById(checkedId).value;
    var Qs = [q4200_Name,q4300_Name,q4400_Name,q4500_Name,q4600_Name,q4700_Name,q4800_Name,q4900_Name,q5000_Name,q5100_Name,q5200_Name]
    if(checkedValue == "はい"){
        document.getElementById("3rd").style.display = "block";
        document.getElementById("2nd").style.display = "block";
        var Cs = document.getElementsByName(q4100_Name);
        for(j=0;j<Cs.length;j++){
            Cs[j].required = true;
        }
    }else if(checkedValue == "いいえ"){
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                //window.alert(Cs[j]);
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
    }
}








//質問1での分岐(O2)
function Q1_branch_O(ele){
    var qId = ele.id
    var Qs = ["entry.1279962251","entry.244485891","entry.1652200503"]
    if(qId == "01001"){
        document.getElementById("0100top").style.display = "none";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                //window.alert(Cs[j]);
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
    }else if(qId == "01002" || qId == "01003"){
        document.getElementById("0100top").style.display = "block";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                Cs[j].required = true;
            }
        }
    }else if(qId == "01004"){
        document.getElementById("0100top").style.display = "none";
        for(i=0;i<Qs.length;i++){
            var Cs = document.getElementsByName(Qs[i]);
            for(j=0;j<Cs.length;j++){
                //window.alert(Cs[j]);
                Cs[j].checked = false;
                Cs[j].required = false;
            }
        }
    }
}

function idTest(ele){
    alert(document.getElementById(ele.id).id);
}