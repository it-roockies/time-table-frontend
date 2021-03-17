import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const root=document.getElementById("root")



// functions

// subjects spliter
function splitSubjects(subjectString) {
  const darslarArray = subjectString.split(' ');
  const subjects = [];
  for(let i = 0; i < darslarArray.length; i += 3) {
      subjects.push(darslarArray.slice(i, i+3).join(" "));
  }

  return subjects;
}


// groupsorter
function Groupsorter({ lvlel, group }) {
  return (
    <div className='mainsorted'>
      {Headermaker(document.getElementById('group_name_chooser').options[document.getElementById('group_name_chooser').selectedIndex].text)}  
      <div className='sorted_by_group'>
        {lvlel.map((dayname)=>(
          <div id='sorted' className='sorted'>
            <div className={"day_name "+dayname.day}></div>    
            {dayname.groups.filter(g => g.name === group).map((group) =>
              group.subjects.map((subject)=> (
                <div className='subject'>{subject}</div>
              ))
            )}
          </div>
        ))}
        
      </div>
    </div>  
  );    
}


// header maker
function Headermaker(el="g/t"){
  return <div className='header'>
  <div className="elheader empty" id="empty">{el}</div>
  <div className="headerel 9-10" id="h9-10">9:10 10:00</div>
  <div className="headerel 10-11" id="h10-11">10:20 11:20</div>
  <div className="headerel 12-13" id="h12-13">12:00 13:00</div>
  <div className="headerel 13-14" id="h13-14">13:20 14:20</div>
  <div className="headerel 14-15" id="h14-15">14:40 15:40</div>
  <div className="headerel 16-17" id="h16-17">16:00 17:00</div>
</div>
}


function MainPage({ setCurrentPage }) {
  return (
    <div className="container">
      <h1>Welcome to TPPU's official academic calendar website</h1>
      <div className="calendars_table" id="calendars_table">
        <div className="cal_item prep"><a className="button" onClick={() => setCurrentPage("prep")}>Preparty year</a></div>
        <div className="cal_item first"><a className="button" onClick={() => setCurrentPage("first")}>First level</a></div>
        <div className="cal_item second"><a className="button" onClick={() => setCurrentPage("first")}>Second level</a></div>
        <div className="cal_item third"><a className="button" onClick={() => setCurrentPage("first")}>Third level</a></div>
      </div>
    </div>
  );
}

function TablePage({ lvlel, onClickBack }) {

  const [group, setGroup] = useState();

  return (
    <div className="main" id="main">
      <div className="container">
        <div className="group_chooser">
          Choose your group
          <select id="group_name_chooser" className="group_name_chooser" value={group} onChange={(event) => setGroup(event.target.value)}>
            
            <option></option>
            {lvlel[0].groups.map((el)=>(
            <option value={el.name}>{el.name}</option>
            ))}
          </select>
          <input type="button" class="btn_back" value="Back to main" onClick={onClickBack}></input>
        </div>
      </div>
      <div className='weeks'>
      {group ? <Groupsorter lvlel={lvlel} group={group} /> : null}
      {lvlel.map((weekdays)=>(
        <div className="weekdays" id='weeks'>
          <h3>{weekdays.day}</h3>
          {Headermaker()}
          {weekdays.groups.map((group)=>(
            <div className="allgroups">
              <div className="sgroup">
                <div className='group_name'>{group.name}</div>
                {group.subjects.map((subject)=>(
                  <div className='subject'>{subject}</div>
                ))}
              </div>
          </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}

function App() {

  const [currentPage, setCurrentPage] = useState("main");
  
  if (currentPage === "main") {
    return <MainPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "prep") {
    return <TablePage lvlel={mainbasefprep} onClickBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "first") {
    return <TablePage lvlel={somemainebase} onClickBack={() => setCurrentPage("main")} />;
  }

  return <div>Not Found</div>
}

ReactDOM.render(<App />, root);


let somebase=[
    {
        "id": 1,
        "date": "2021-03-09",
        "period": "4",
        "group": 1,
        "classroom": 11,
        "teacher": 15,
        "subject": 9
    },
    {
        "id": 1,
        "date": "2021-03-09",
        "period": "4",
        "group": 1,
        "classroom": 11,
        "teacher": 15,
        "subject": 9
    },
    {
        "id": 2,
        "date": "2021-03-10",
        "period": "2",
        "group": 1,
        "classroom": 11,
        "teacher": 15,
        "subject": 9
    },
    {
        "id": 3,
        "date": "2021-03-09",
        "period": "5",
        "group": 1,
        "classroom": 11,
        "teacher": 15,
        "subject": 9
    },
    {
        "id": 4,
        "date": "2021-03-08",
        "period": "4",
        "group": 1,
        "classroom": 11,
        "teacher": 15,
        "subject": 9
    },
    {
        "id": 5,
        "date": "2021-03-09",
        "period": "3",
        "group": 3,
        "classroom": 20,
        "teacher": 27,
        "subject": 5
    },
    {
        "id": 6,
        "date": "2021-03-10",
        "period": "4",
        "group": 15,
        "classroom": 20,
        "teacher": 27,
        "subject": 5
    },
    {
        "id": 7,
        "date": "2021-03-11",
        "period": "5",
        "group": 19,
        "classroom": 20,
        "teacher": 27,
        "subject": 5
    },
    {
        "id": 8,
        "date": "2021-03-09",
        "period": "1",
        "group": 13,
        "classroom": 20,
        "teacher": 27,
        "subject": 5
    },
    {
        "id": 9,
        "date": "2021-03-08",
        "period": "1",
        "group": 5,
        "classroom": 20,
        "teacher": 27,
        "subject": 5
    },
    {
      "id": 9,
      "date": "2021-03-08",
      "period": "2",
      "group": 5,
      "classroom": 20,
      "teacher": 27,
      "subject": 5
    },
    {
      "id": 9,
      "date": "2021-03-08",
      "period": "3",
      "group": 5,
      "classroom": 20,
      "teacher": 27,
      "subject": 5
    },
    {
      "id": 9,
      "date": "2021-03-08",
      "period": "4",
      "group": 5,
      "classroom": 20,
      "teacher": 27,
      "subject": 5
    },
    {
      "id": 9,
      "date": "2021-03-08",
      "period": "5",
      "group": 5,
      "classroom": 20,
      "teacher": 27,
      "subject": 5
    },
    {
      "id": 9,
      "date": "2021-03-08",
      "period": "6",
      "group": 5,
      "classroom": 20,
      "teacher": 27,
      "subject": 5
    },
    {
        "id": 10,
        "date": "2021-03-10",
        "period": "3",
        "group": 1,
        "classroom": 20,
        "teacher": 27,
        "subject": 5
    }
]
let somemainebase=[
  {
    day:"Monday",
    groups: []
  },
  {
    day:"Tuesday",
    groups: []
  },
  {
    day:"Wednesday",
    groups: []
  },
  {
    day:"Thursday",
    groups: []
  },
  {
    day:"Friday",
    groups: []
  },
  {
    day:"Saturday",
    groups: []
  }
]
let baseGroup={
  1:"ME1-19",
  2:"ME2-19",
  3:"ME3-19",
  4:"ME4-19",
  5:"CIE1-19",
  6:"CIE2-19",
  7:"IT1-19",
  8:"IT2-19",
  9:"IT3-19",
  10:"IT4-19",
  11:"IT5-19",
  12:"IT6-19",
  15:"IT7-19",
  16:"IT8-19"

}
let baseSubject={
  1:"math ",
  2:"IT",
  3:"SALOM",
  4:"math ",
  5:"math ",
  6:"MATH ",
  7:"math ",
  8:"math ",
  9:"math ",
  10:"math ",
  11:"math ",
  12:"math ",
  13:"math ",
  14:"math ",
  
}
const baseClass={
  1:"101",
  20:"BH "
}
const baseTeacher={
  27:"IH ",
} 

somebase.forEach((elem)=>{
  const date = new Date(elem.date);
  const dayIndex = date.getDay()-1;
  console.log(elem.date, dayIndex, somemainebase[dayIndex].day);
  const groups = somemainebase[dayIndex].groups;

  let group = groups.find(group => group.id === elem.group);
  if (group === undefined) {
    group = {
      id: elem.group,
      name: baseGroup[elem.group],
      subjects: ["","","","","",""]
    }
    groups.push(group);
  }
  group.subjects[Number(elem.period) - 1] = (baseSubject[elem.subject]===undefined ? "" :baseSubject[elem.subject])+(baseClass[elem.classroom]===undefined ? "" :baseClass[elem.classroom])+(baseTeacher[elem.teacher]===undefined?"":baseTeacher[elem.teacher]);
});
let mainbaseffirst=[
  {day:"Monday",
  groups:[
      {name:"ME1-19", subjects: 
      ["AA Draw 402AB"," AA Draw 402AB SJ Phy_1 GH         "]},
      {name:"ME2-19", subjects: 
      ["AA Draw 402AB AA Draw 402AB SJ Phy_1 GH       "]},
      {name:"ME3-19", subjects: 
      ["AA Draw 402AB AA Draw 402AB SJ Phy_1 GH AJ Math_2 206    "]},
      {name:"ME4-19", subjects: 
      ["AA Draw 402AB AA Draw 402AB SJ Phy_1 GH AJ Math_2 206    "]},
      {name:"CIE1-19", subjects: 
      [" SJ Phy_1 GH             "]},
      {name:"CIE2-19", subjects: 
      [" SJ Phy_1 GH             "]},
      {name:"IT1-19", subjects: 
      [" SV ITL online 3:30             "]},
      {name:"IT2-19", subjects: 
      [" SV ITL online 3:30             "]},
      {name:"IT3-19", subjects: 
      [" SV ITL online 3:30             "]},
      {name:"IT4-19", subjects: 
      ["                "]},
      {name:"IT5-19", subjects: 
      ["                "]},
      {name:"IT6-19", subjects: 
      ["                "]},
      {name:"IT7-19", subjects: 
      ["                "]},
      {name:"IT8-19", subjects: 
      ["                "]},
  ]
  },
  {day:"Tuesday",
  groups:[
      {name:"ME1-19", subjects: 
      ["AA Draw 403AB OE Phy_1 306 AA Draw 406 (1h) AA Draw 406 (1h)    "]},
      {name:"ME2-19", subjects: 
      ["AA Draw 403AB OE Phy_1 306           "]},
      {name:"ME3-19", subjects: 
      ["AA Draw 403AB AJ Math_2 205 DB Phy_1 205       "]},
      {name:"ME4-19", subjects: 
      ["AA Draw 403AB AJ Math_2 205 DB Phy_1 205 AN Draw 407 (2h)    "]},
      {name:"CIE1-19", subjects: 
      ["SV ITL online_1pm             "]},
      {name:"CIE2-19", subjects: 
      ["SV ITL online_1pm             "]},
      {name:"IT1-19", subjects: 
      ["AY Phy_1 GH OE Phy_1 306            "]},
      {name:"IT2-19", subjects: 
      ["AY Phy_1 GH OE Phy_1 306            "]},
      {name:"IT3-19", subjects: 
      ["AY Phy_1 GH IH Math_2 105 OE Phy_1 306 "]},
      {name:"IT4-19", subjects: 
      ["AY Phy_1 GH IH Math_2 105 OE Phy_1 306 "]},
      {name:"IT5-19", subjects: 
      ["AY Phy_1 GH DB Phy_1 205 "]},
      {name:"IT6-19", subjects: 
      ["AY Phy_1 GH DB Phy_1 205 "]},
      {name:"IT7-19", subjects: 
      ["AY Phy_1 GH US Math_2 305 "]},
      {name:"IT8-19", subjects: 
      ["AY Phy_1 GH US Math_2 305 "]},
  ]
  },
  {day:"Wednesday",
  groups:[
      {name:"ME1-19", subjects: 
      [" AA Draw 402AB SJ Phy_1 GH AA Draw 406_(2h) AA Draw 406_(2h) "]},
      {name:"ME2-19", subjects: 
      [" AA Draw 402AB SJ Phy_1 GH AA Draw 406 (1h) AA Draw 406 (1h) "]},
      {name:"ME3-19", subjects: 
      [" AA Draw 402AB SJ Phy_1 GH SV ITL online 1:30 "]},
      {name:"ME4-19", subjects: 
      [" AA Draw 402AB SJ Phy_1 GH SV ITL online 1:30 "]},
      {name:"CIE1-19", subjects: 
      [" FA Phy_1 304 SJ Phy_1 GH "]},
      {name:"CIE2-19", subjects: 
      [" FA Phy_1 304 SJ Phy_1 GH "]},
      {name:"IT1-19", subjects: 
      [" IH Math_2 105AY Phy_1 BH "]},
      {name:"IT2-19", subjects: 
      [" IH Math_2 105AY Phy_1 BH "]},
      {name:"IT3-19", subjects: 
      ["AY Phy_1 BH OE Phy_1 402AB IH Math_2 105 "]},
      {name:"IT4-19", subjects: 
      ["AY Phy_1 BH OE Phy_1 402AB IH Math_2 105 "]},
      {name:"IT5-19", subjects: 
      ["AY Phy_1 BH IH Math_2 105 "]},
      {name:"IT6-19", subjects: 
      ["AY Phy_1 BH IH Math_2 105 "]},
      {name:"IT7-19", subjects: 
      ["AY Phy_1 BH SV ITL online 3pm "]},
      {name:"IT8-19", subjects: 
      ["AY Phy_1 BH SV ITL online 3pm "]},
  ]
  },
  {day:"Thursday",
  groups:[
      {name:"ME1-19", subjects: 
      [" AO Math_2 BH AO Math_2 304 "]},
      {name:"ME2-19", subjects: 
      ["AA Draw 406_(2h) AA Draw 406_(2h) AO Math_2 BH AO Math_2 304    "]},
      {name:"ME3-19", subjects: 
      ["AA Draw 406 (1h) AA/AN Draw 406/407 AO Math_2 BH "]},
      {name:"ME4-19", subjects: 
      [" AN Draw 407 (1h) AO Math_2 BH AN Draw 407_(2h) "]},
      {name:"CIE1-19", subjects: 
      [" AD Math_2 306 AD Math_2 BH "]},
      {name:"CIE2-19", subjects: 
      [" AD Math_2 306 AO Math_2 BH "]},
      {name:"IT1-19", subjects: 
      ["IH Math_2 105 OE PHY_1 403AB MM AP_1 online 5pm-6pm"]},
      {name:"IT2-19", subjects: 
      ["IH Math_2 105 OE PHY_1 403AB MM AP_1 online 5pm-6pm"]},
      {name:"IT3-19", subjects: 
      [" MM AP_1 online 5pm-6pm"]},
      {name:"IT4-19", subjects: 
      [" SV ITL online_1pm MM AP_1 online 5pm-6pm"]},
      {name:"IT5-19", subjects: 
      ["DB Phy_1 205 IH Math_2 105 SV ITL online_1pm MM AP_1 online 5pm-6pm"]},
      {name:"IT6-19", subjects: 
      ["DB Phy_1 205 IH Math_2 105 SV ITL online_1pm MM AP_1 online 5pm-6pm"]},
      {name:"IT7-19", subjects: 
      [" US Math_2 306 DB Phy_1 305 MM AP_1 online 5pm-6pm"]},
      {name:"IT8-19", subjects: 
      [" US Math_2 306 DB Phy_1 305 MM AP_1 online 5pm-6pm"]},
  ]
  },
  {day:"Friday",
  groups:[
      {name:"ME1-19", subjects: 
      [" SJ Phy_1 BH OE Phy_1 306 SV ITL online 2:30 "]},
      {name:"ME2-19", subjects: 
      [" SJ Phy_1 BH OE Phy_1 306 SV ITL online 2:30     "]},
      {name:"ME3-19", subjects: 
      ["AN Draw 407_(2h) SJ Phy_1 BH DB Phy_1 205 "]},
      {name:"ME4-19", subjects: 
      ["AN Draw 407 (1h) SJ Phy_1 BH DB Phy_1 205 "]},
      {name:"CIE1-19", subjects: 
      [" SJ Phy_1 BH FA Phy_1 305 "]},
      {name:"CIE2-19", subjects: 
      [" SJ Phy_1 BH FA Phy_1 305 "]},
      {name:"IT1-19", subjects: 
      ["AY Phy_1 BH KF Math_2 GH KF Math_2 GH "]},
      {name:"IT2-19", subjects: 
      ["AY Phy_1 BH KF Math_2 GH KF Math_2 GH "]},
      {name:"IT3-19", subjects: 
      ["AY Phy_1 BH KF Math_2 GH KF Math_2 GH "]},
      {name:"IT4-19", subjects: 
      ["AY Phy_1 BH KF Math_2 GH KF Math_2 GH "]},
      {name:"IT5-19", subjects: 
      ["AY Phy_1 BH KF Math_2 GH KF Math_2 GH "]},
      {name:"IT6-19", subjects: 
      ["AY Phy_1 BH KF Math_2 GH KF Math_2 GH "]},
      {name:"IT7-19", subjects: 
      ["AY Phy_1 BH KF Math_2 GH KF Math_2 GH DB Phy_1 205 "]},
      {name:"IT8-19", subjects: 
      ["AY Phy_1 BH KF Math_2 GH KF Math_2 GH DB Phy_1 205 "]},
  ]
  },
  {day:"Saturday",
  groups:[
      {name:"ME1-19", subjects: 
      ["AO Math_2 105 AO Math_2 GH AA Draw 402AB AA Draw 402AB "]},
      {name:"ME2-19", subjects: 
      ["AO Math_2 105 AO Math_2 GH AA/AN Draw 402AB/403AB AA/AN Draw 402AB/403AB    "]},
      {name:"ME3-19", subjects: 
      [" AO Math_2 GH AN/EK Draw 403AB 404AB AN/EK Draw 403AB 404AB "]},
      {name:"ME4-19", subjects: 
      [" AO Math_2 GH EK Draw 404AB EK Draw 404AB "]},
      {name:"CIE1-19", subjects: 
      [" AO Math_2 GH AO Math_2 105 "]},
      {name:"CIE2-19", subjects: 
      [" AO Math_2 GH AO Math_2 105 "]},
      {name:"IT1-19", subjects: 
      ["                "]},
      {name:"IT2-19", subjects: 
      ["                "]},
      {name:"IT3-19", subjects: 
      ["                "]},
      {name:"IT4-19", subjects: 
      ["                "]},
      {name:"IT5-19", subjects: 
      ["                "]},
      {name:"IT6-19", subjects: 
      ["                "]},
      {name:"IT7-19", subjects: 
      ["                "]},
      {name:"IT8-19", subjects: 
      ["                "]},
  ]
  },
]
let mainbasefprep=[
  {day:"Monday",
  groups:[
      {name:"g1", subjects: 
      ["ENG 306 GM MATH GH UB RL 302AB LT WEB GH YB MV 402AB AS ICSAT 405 NN"]},
      {name:"g2", subjects: 
      ["ENG 306 GM MATH GH UB RL 302AB LT WEB GH YB MV 402AB AS ICSAT 405 NN"]},
      {name:"g3", subjects: 
      ["ENG 304 DA MATH GH UB RL 302AB LT WEB GH YB MV 402AB AS WEB 406 YB"]},
      {name:"g4", subjects: 
      ["ENG 304 DA MATH GH UB RL 302AB LT WEB GH YB MV 402AB AS WEB 406 YB"]},
      {name:"g5", subjects: 
      ["ENG 105 OM MATH GH UB ECNM 403AB MS WEB GH YB MV 402AB AS RL 302AB LT"]},
      {name:"g6", subjects: 
      ["ENG 105 OM MATH GH UB ECNM 403AB MS WEB GH YB MV 402AB AS RL 302AB LT"]},
      {name:"g7", subjects: 
      ["   MATH GH UB MATH 206 UB WEB GH YB MV 402AB AS RL 302AB LT"]},
      {name:"g8", subjects: 
      ["MATH GH UB CHEM 403AB DT MATH 206 UB WEB GH YB MV 402AB AS   "]},
      {name:"g9", subjects: 
      ["MATH GH UB CHEM 403AB DT ENG CH DA WEB GH YB MV 402AB AS   "]},
      {name:"g10", subjects: 
      ["MATH GH UB CHEM 403AB DT ENG CH DA WEB GH YB MV 402AB AS   "]},
      {name:"g11", subjects: 
      ["MATH GH UB ENG 306 GM ENG 306 GM RL 302AB LT MV 402AB AS MV 402AB AS"]},
      {name:"g12", subjects: 
      ["MATH GH UB ENG 306 GM ENG 306 GM RL 302AB LT MV 402AB AS MV 402AB AS"]},
      {name:"g13", subjects: 
      ["MATH GH UB TD 305 EK ENG 304 IM RL 302AB LT MV 402AB AS MV 402AB AS"]},
      {name:"g14", subjects: 
      ["MATH GH UB TD 305 EK ENG 304 IM    MV 402AB AS MV 402AB AS"]},
      {name:"g15", subjects: 
      ["TD 305 EK PHY 206AY ENG 105 OM ECNM 304 MS MV 402AB AS MV 402AB AS"]},
      {name:"g16", subjects: 
      ["TD 305 EK PHY 206AY ENG 105 OM ECNM 304 MS MV 402AB AS MV 402AB AS"]},
      {name:"g17", subjects: 
      ["CHEM 403AB DT ENG 304 IM MATH 205 AB WEB 405 MA MV 402AB AS MV 402AB AS"]},
      {name:"g18", subjects: 
      ["CHEM 403AB DT ENG 304 IM MATH 205 AB WEB 405 MA MV 402AB AS MV 402AB AS"]},
      {name:"g19", subjects: 
      ["CHEM 403AB DT MATH 205 AB TD 305 EK WEB 405 MA MV 402AB AS MV 402AB AS"]},
      {name:"g20", subjects: 
      ["CHEM 403AB DT MATH 205 AB TD 305 EK WEB 405 MA MV 402AB AS MV 402AB AS"]},
  ]
  },
  {day:"Tuesday",
  groups:[
      {name:"g1", subjects: 
      ["TD 302AB EK MATH 206 UB ENG 302AB GM ICSAT GH NM RL CH LT WEB 406 YB"]},
      {name:"g2", subjects: 
      ["TD 302AB EK MATH 206 UB ENG 302AB GM ICSAT GH NM RL CH LT WEB 406 YB"]},
      {name:"g3", subjects: 
      ["MATH 206 UB ENG 305 DA WEB 407 YB ICSAT GH NM RL CH LT ICSAT 403 NN"]},
      {name:"g4", subjects: 
      ["MATH 206 UB ENG 305 DA WEB 407 YB ICSAT GH NM RL CH LT ICSAT 403 NN"]},
      {name:"g5", subjects: 
      ["PHY 205 DB ENG 105 OM MATH 206 UB ICSAT GH NM RL CH LT   "]},
      {name:"g6", subjects: 
      ["PHY 205 DB ENG 105 OM MATH 206 UB ICSAT GH NM RL CH LT   "]},
      {name:"g7", subjects: 
      ["PHY GHAY ENG 304 SG TD 304 EK ICSAT GH NM RL CH LT   "]},
      {name:"g8", subjects: 
      ["PHY GHAY ENG 304 SG TD 304 EK ICSAT GH NM RL CH LT RL 105 LT"]},
      {name:"g9", subjects: 
      ["PHY GHAY TD 302AB EK ENG 305 DA ICSAT GH NM RL CH LT RL 105 LT"]},
      {name:"g10", subjects: 
      ["PHY GHAY TD 302AB EK ENG 305 DA ICSAT GH NM RL CH LT RL 105 LT"]},
      {name:"g11", subjects: 
      ["PHY GHAY ENG CH GM ECNM 403AB MS WEB BH YB RL CH LT   "]},
      {name:"g12", subjects: 
      ["PHY GHAY ENG CH GM ECNM 403AB MS WEB BH YB RL CH LT   "]},
      {name:"g13", subjects: 
      ["PHY GHAY ENG 403AB IM    WEB BH YB RL CH LT ECNM 403AB MS"]},
      {name:"g14", subjects: 
      ["PHY GHAY ENG 403AB IM ICSAT 403 AQ WEB BH YB RL CH LT ECNM 403AB MS"]},
      {name:"g15", subjects: 
      ["ENG 105 OM PHY GH DB ICSAT 403 AQ WEB BH YB RL CH LT   "]},
      {name:"g16", subjects: 
      ["ENG 105 OM PHY GH DB ICSAT 403 AQ WEB BH YB RL CH LT   "]},
      {name:"g17", subjects: 
      ["ENG 305 IM PHY GH DB PHY 306 OE WEB BH YB RL CH LT   "]},
      {name:"g18", subjects: 
      ["ENG 305 IM PHY GH DB PHY 306 OE WEB BH YB RL CH LT   "]},
      {name:"g19", subjects: 
      ["ENG 304 SG PHY GH DB RL 105 LT WEB BH YB RL CH LT   "]},
      {name:"g20", subjects: 
      ["ENG 304 SG PHY GH DB RL 105 LT WEB BH YB RL CH LT   "]},
  ]
  },
  {day:"Wednesday",
  groups:[
      {name:"g1", subjects: 
      ["PHY GHAY ENG 307 GM CHEM 403AB OR    ECNM CH MS IMS 402AB ShT"]},
      {name:"g2", subjects: 
      ["PHY GHAY ENG 307 GM CHEM 403AB OR    ECNM CH MS IMS 402AB ShT"]},
      {name:"g3", subjects: 
      ["PHY GHAY CHEM 403AB OR ENG 305 DA    ECNM CH MS IMS 402AB ShT"]},
      {name:"g4", subjects: 
      ["PHY GHAY CHEM 403AB OR ENG 305 DA    ECNM CH MS IMS 402AB ShT"]},
      {name:"g5", subjects: 
      ["PHY GHAY CHEM 205 DT ENG CH OM WEB 407 YB ECNM CH MS IMS 402AB ShT"]},
      {name:"g6", subjects: 
      ["PHY GHAY CHEM 205 DT ENG CH OM WEB 407 YB ECNM CH MS IMS 402AB ShT"]},
      {name:"g7", subjects: 
      ["CHEM 205 DT ENG 302AB SG ENG 302AB SG ECNM 205 MS ECNM CH MS IMS 402AB ShT"]},
      {name:"g8", subjects: 
      ["CHEM 205 DT ENG 302AB SG ENG 302AB SG ECNM 205 MS ECNM CH MS IMS 402AB ShT"]},
      {name:"g9", subjects: 
      ["ENG 305 DA CHEM 306 AS MATH 205 AB    ECNM CH MS IMS 402AB ShT"]},
      {name:"g10", subjects: 
      ["ENG 305 DA CHEM 306 AS MATH 205 AB    ECNM CH MS IMS 402AB ShT"]},
      {name:"g11", subjects: 
      ["TD 403AB EK MATH 305 JK CHEM 306 AS    ECNM CH MS IMS 402AB ShT"]},
      {name:"g12", subjects: 
      ["TD 403AB EK MATH 305 JK CHEM 306 AS ICSAT 405 AQ ECNM CH MS IMS 402AB ShT"]},
      {name:"g13", subjects: 
      ["MATH 206 AB CHEM 206 MT ENG 404AB IM ICSAT 405 AQ ECNM CH MS IMS 402AB ShT"]},
      {name:"g14", subjects: 
      ["MATH 206 AB CHEM 206 MT ENG 404AB IM WEB 403 MA ECNM CH MS IMS 402AB ShT"]},
      {name:"g15", subjects: 
      ["ENG 105 OM TD GH EK CHEM 206 MT WEB 403 MA ECNM CH MS IMS 402AB ShT"]},
      {name:"g16", subjects: 
      ["ENG 105 OM TD GH EK CHEM 206 MT WEB 403 MA ECNM CH MS IMS 402AB ShT"]},
      {name:"g17", subjects: 
      ["ECNM 304 MS TD GH EK TD 105 EK ENG 306 IM ECNM CH MS IMS 402AB ShT"]},
      {name:"g18", subjects: 
      ["ECNM 304 MS TD GH EK TD 105 EK ENG 306 IM ECNM CH MS IMS 402AB ShT"]},
      {name:"g19", subjects: 
      ["ENG 302AB SG TD GH EK PHY 304 OE ENG 302AB SG ECNM CH MS IMS 402AB ShT"]},
      {name:"g20", subjects: 
      ["ENG 302AB SG TD GH EK PHY 304 OE ENG 302AB SG ECNM CH MS IMS 402AB ShT"]},
  ]
  },
  {day:"Thursday",
  groups:[
      {name:"g1", subjects: 
      ["WEB 405 YB PHY 205 DB ENG 307 GM TH 303 NN      "]},
      {name:"g2", subjects: 
      ["WEB 405 YB PHY 205 DB ENG 307 GM TH 303 NN      "]},
      {name:"g3", subjects: 
      ["TD 302AB EK ENG 307 DA PHY 205 DB TH --- DA      "]},
      {name:"g4", subjects: 
      ["TD 302AB EK ENG 307 DA PHY 205 DB TH ---AY      "]},
      {name:"g5", subjects: 
      ["ICSAT 403 NN ENG 302AB OM TD 105 EK TH --- OM WEB 405 YB   "]},
      {name:"g6", subjects: 
      ["ICSAT 403 NN ENG 302AB OM TD 105 EK TH --- OM WEB 405 YB   "]},
      {name:"g7", subjects: 
      ["ENG 306 SG PHY 206AY WEB 405 YB TH --- SG ICSAT 407 NN   "]},
      {name:"g8", subjects: 
      ["ENG 306 SG PHY 206AY WEB 405 YB TH ---AY ICSAT 407 NN   "]},
      {name:"g9", subjects: 
      ["PHY 304 OI TD GH EK ENG 403AB DA TH --- SG ICSAT 406 AQ   "]},
      {name:"g10", subjects: 
      ["PHY 304 OI TD GH EK ENG 403AB DA TH --- DA ICSAT 406 AQ   "]},
      {name:"g11", subjects: 
      ["ENG 305 GM TD GH EK PHY 304 OI TH CH HT ICSAT 406 AQ   "]},
      {name:"g12", subjects: 
      ["ENG 305 GM TD GH EK PHY 304 OI TH CH HT      "]},
      {name:"g13", subjects: 
      ["PHY 206AY TD GH EK ENG CH IM TH CH HT      "]},
      {name:"g14", subjects: 
      ["PHY 206AY TD GH EK ENG CH IM TH CH HT      "]},
      {name:"g15", subjects: 
      ["MATH GH US MATH 304 US ENG 302AB OM TH CH HT      "]},
      {name:"g16", subjects: 
      ["MATH GH US MATH 304 US ENG 302AB OM TH CH HT      "]},
      {name:"g17", subjects: 
      ["MATH GH US ENG CH IM CHEM 305 MT TH CH HT      "]},
      {name:"g18", subjects: 
      ["MATH GH US ENG CH IM CHEM 305 MT TH CH HT      "]},
      {name:"g19", subjects: 
      ["MATH GH US CHEM 305 MT ENG 206 SG TH CH HT      "]},
      {name:"g20", subjects: 
      ["MATH GH US CHEM 305 MT ENG 206 SG TH CH HT      "]},
  ]
  },
  {day:"Friday",
  groups:[
      {name:"g1", subjects: 
      ["TD GH EK ECNM 206 MS MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g2", subjects: 
      ["TD GH EK ECNM 206 MS MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g3", subjects: 
      ["TD GH EK ECNM 206 MS MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g4", subjects: 
      ["TD GH EK ECNM 206 MS MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g5", subjects: 
      ["TD GH EK    MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g6", subjects: 
      ["TD GH EK    MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g7", subjects: 
      ["TD GH EK WEB 407 YB MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g8", subjects: 
      ["TD GH EK WEB 407 YB MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g9", subjects: 
      ["ECNM 206 MS WEB 405 MA MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g10", subjects: 
      ["ECNM 206 MS WEB 405 MA MV 301 AS MV 402AB AS MV 402AB AS   "]},
      {name:"g11", subjects: 
      ["ICSAT CH NM WEB 405 MA    MV 402AB AS MV 402AB AS   "]},
      {name:"g12", subjects: 
      ["ICSAT CH NM    WEB 405 MA MV 402AB AS MV 402AB AS   "]},
      {name:"g13", subjects: 
      ["ICSAT CH NM    WEB 405 MA MV 402AB AS MV 402AB AS   "]},
      {name:"g14", subjects: 
      ["ICSAT CH NM RL 105 LT    MV 402AB AS MV 402AB AS   "]},
      {name:"g15", subjects: 
      ["ICSAT CH NM RL 105 LT    MV 402AB AS MV 402AB AS   "]},
      {name:"g16", subjects: 
      ["ICSAT CH NM RL 105 LT    MV 402AB AS MV 402AB AS   "]},
      {name:"g17", subjects: 
      ["ICSAT CH NM ICSAT 406 AQ RL 105 LT MV 402AB AS MV 402AB AS   "]},
      {name:"g18", subjects: 
      ["ICSAT CH NM ICSAT 406 AQ RL 105 LT MV 402AB AS MV 402AB AS   "]},
      {name:"g19", subjects: 
      ["ICSAT CH NM ICSAT 406 AQ ECNM 206 MS MV 402AB AS MV 402AB AS   "]},
      {name:"g20", subjects: 
      ["ICSAT CH NM ICSAT 406 AQ ECNM 206 MS MV 402AB AS MV 402AB AS   "]},
  ]
  },
  {day:"Saturday",
  groups:[
      {name:"g1", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g2", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g3", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g4", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g5", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g6", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g7", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g8", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g9", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g10", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g11", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g12", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g13", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g14", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g15", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g16", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g17", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g18", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g19", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
      {name:"g20", subjects: 
      ["LS BH SU LS BH SU LS BH SU LS BH SU      "]},
  ]
  }
]