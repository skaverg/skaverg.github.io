import{e as v,g as x,i as b,j as R,k as y,l as I,m as S,o as L}from"./chunk-MNP2YB53.js";import{Ga as d,Ia as n,Ja as l,Kb as O,Pa as m,Ta as g,_a as u,cb as f,db as h,eb as _,fb as i,gb as r,hb as s,kb as C,ob as M,tb as a,ub as P,vb as p}from"./chunk-P6TNVG24.js";var T=(o,e)=>e.id;function U(o,e){if(o&1&&(i(0,"article",2)(1,"header")(2,"h1")(3,"a",4),a(4),r()(),i(5,"aside")(6,"h3"),s(7,"mat-icon",5),a(8),r(),i(9,"h3"),s(10,"mat-icon",6),a(11),r(),i(12,"h3"),s(13,"mat-icon",7),a(14),r()()(),i(15,"section",8)(16,"h4"),a(17),r(),i(18,"p"),a(19),r()()()),o&2){let t=e.$implicit;n(3),M("href",t.html_url,d),n(),P(t.name),n(4),p(" ",t.stargazers_count||0," "),n(3),p(" ",t.fork_count||0," "),n(3),p(" ",t.open_issues_count||0," "),n(3),p("Language: ",t.language||"Unknown",""),n(2),p("Description: ",t.description||"None","")}}function k(o,e){o&1&&s(0,"app-footer",3)}var N=class o{constructor(e,t,c){this.route=e;this.githubService=t;this.router=c}userLogin="";userName="";userType="";pageNumber=1;userRepos=[];loading=!1;reposComplete=!1;ngOnInit(){this.route.queryParams.subscribe(e=>{this.userLogin=e.login,this.userType=e.type,this.userName=e.name,this.userLogin||this.router.navigate(["/"]),this.loadRepos()})}loadRepos(){this.loading=!0,this.githubService.getRepositories(this.userLogin,this.pageNumber).subscribe(e=>{e.length!==0?(console.log(e.length),this.pageNumber++,this.userRepos.push(...e)):(console.log("0"),this.reposComplete=!0),this.loading=!1})}onScrollLoad(){!this.reposComplete&&!this.loading&&this.loadRepos()}static \u0275fac=function(t){return new(t||o)(l(v),l(L),l(x))};static \u0275cmp=m({type:o,selectors:[["app-user-repos"]],decls:5,vars:3,consts:[[3,"showHomeLink","title"],["appScrollable","",1,"container",3,"triggerReached"],[1,"card"],[1,"section-footer"],[3,"href"],["fontIcon","star"],["fontIcon","fork_right"],["fontIcon","bug_report"],[1,"detail"]],template:function(t,c){t&1&&(s(0,"app-header",0),i(1,"section",1),C("triggerReached",function(){return c.onScrollLoad()}),h(2,U,20,7,"article",2,T),g(4,k,1,0,"app-footer",3),r()),t&2&&(u("showHomeLink",!0)("title","- Github Repositories for "+c.userName+" ("+c.userType+")"),n(2),_(c.userRepos),n(2),f(c.loading?4:-1))},dependencies:[O,R,b,y,I,S],styles:[".container[_ngcontent-%COMP%]{flex-direction:column}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex:1;flex-direction:column}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{background-color:#2a265f;border-radius:10px 10px 0 0;display:flex;padding:0 16px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex:1}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{color:gold;display:flex}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{align-items:center;display:flex;padding-right:8px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{padding:8px 16px}"]})};export{N as UserReposComponent};