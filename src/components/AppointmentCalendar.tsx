'use client';
import {useState} from 'react';
type Props={days:string[];day:string;onChange:(day:string)=>void};
function monthStart(value:string){return value.slice(0,7)+'-01';}
export default function AppointmentCalendar({days,day,onChange}:Props){
  const [selectedMonth,setMonth]=useState('');
  const currentMonth=new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()).slice(0,7)+'-01';
  const month=selectedMonth||monthStart(days[0]||currentMonth);
  const date=new Date(month+'T12:00:00Z');
  const year=date.getUTCFullYear(), m=date.getUTCMonth();
  const count=new Date(Date.UTC(year,m+1,0)).getUTCDate();
  const first=new Date(Date.UTC(year,m,1)).getUTCDay();
  const changeMonth=(offset:number)=>setMonth(new Date(Date.UTC(year,m+offset,1)).toISOString().slice(0,10));
  const lastMonth=monthStart(days.at(-1)||currentMonth);
  return <div className="mt-4 rounded-xl border border-neutral-600 bg-neutral-950 p-4">
    <div className="mb-4 flex items-center justify-between gap-2">
      <button type="button" aria-label="Previous month" disabled={month<=currentMonth} onClick={()=>changeMonth(-1)} className="rounded-lg border border-neutral-600 px-3 py-2 disabled:opacity-30">←</button>
      <h3 className="font-semibold" aria-live="polite">{date.toLocaleDateString('en-US',{timeZone:'UTC',month:'long',year:'numeric'})}</h3>
      <button type="button" aria-label="Next month" disabled={month>=lastMonth} onClick={()=>changeMonth(1)} className="rounded-lg border border-neutral-600 px-3 py-2 disabled:opacity-30">→</button>
    </div>
    <div className="grid grid-cols-7 gap-1 text-center text-xs text-neutral-400">{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=><span key={d}>{d}</span>)}</div>
    <div className="mt-2 grid grid-cols-7 gap-1" aria-label="Choose an available appointment date">
      {Array.from({length:first},(_,i)=><span key={'blank'+i}/>)}
      {Array.from({length:count},(_,i)=>{
        const value=`${year}-${String(m+1).padStart(2,'0')}-${String(i+1).padStart(2,'0')}`;
        const enabled=days.includes(value);
        return <button key={value} type="button" disabled={!enabled} aria-pressed={day===value} aria-label={new Date(value+'T12:00:00Z').toLocaleDateString('en-US',{timeZone:'UTC',weekday:'long',month:'long',day:'numeric',year:'numeric'})} onClick={()=>onChange(value)} className={`min-h-11 rounded-lg p-2 text-sm disabled:opacity-25 ${day===value?'bg-amber-400 font-bold text-black':'border border-neutral-700 hover:enabled:border-amber-400'}`}>{i+1}</button>;
      })}
    </div>
    <p className="mt-3 text-xs text-neutral-400">Dimmed dates have no available appointments. Choose a date, then a time below.</p>
  </div>;
}
