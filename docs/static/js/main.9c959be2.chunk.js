(this["webpackJsonp@nexys/math-ts"]=this["webpackJsonp@nexys/math-ts"]||[]).push([[0],{15:function(n,t){},18:function(n,t,r){n.exports=r(28)},28:function(n,t,r){"use strict";r.r(t);var e={};r.r(e),r.d(e,"factorial",(function(){return W})),r.d(e,"divWoRest",(function(){return B}));var u={};r.r(u),r.d(u,"coefficientR",(function(){return D})),r.d(u,"coefficient",(function(){return J}));var i={};r.r(i),r.d(i,"Complex",(function(){return Y})),r.d(i,"exp",(function(){return U})),r.d(i,"default",(function(){return V}));var o={};r.r(o),r.d(o,"toPolar",(function(){return X})),r.d(o,"toCartesian",(function(){return Z})),r.d(o,"toCylindrical",(function(){return $})),r.d(o,"toCartesianFromCylindrical",(function(){return _})),r.d(o,"toSpherical",(function(){return G})),r.d(o,"toSphericalFromCylindrical",(function(){return H})),r.d(o,"toCylindricalFromSpherical",(function(){return K})),r.d(o,"toCartesianFromSpherical",(function(){return Q}));var a={};r.r(a),r.d(a,"toDegree",(function(){return nn})),r.d(a,"toRad",(function(){return tn}));var c={};r.r(c),r.d(c,"simple",(function(){return rn}));var f={};r.r(f),r.d(f,"fft",(function(){return en}));var l={};r.r(l),r.d(l,"mortgageMultiplier",(function(){return un})),r.d(l,"mortgageRepayment",(function(){return on})),r.d(l,"dueAtN",(function(){return an})),r.d(l,"interestAtN",(function(){return cn})),r.d(l,"cumulativeInterestAtN",(function(){return fn}));var h={};r.r(h),r.d(h,"Loan",(function(){return l}));var s={};r.r(s),r.d(s,"linear",(function(){return ln})),r.d(s,"quadratic",(function(){return hn})),r.d(s,"polynomial",(function(){return sn}));var m={};r.r(m),r.d(m,"generic",(function(){return mn}));var d={};r.r(d),r.d(d,"linest",(function(){return yn})),r.d(d,"estimatedY",(function(){return wn}));var v={};r.r(v),r.d(v,"default",(function(){return Mn})),r.d(v,"sum",(function(){return xn})),r.d(v,"shape",(function(){return bn})),r.d(v,"multiplication",(function(){return En})),r.d(v,"transpose",(function(){return kn})),r.d(v,"squareConditions",(function(){return An})),r.d(v,"determinant",(function(){return jn})),r.d(v,"gaussJordan",(function(){return qn})),r.d(v,"inverse",(function(){return On}));var p={};r.r(p),r.d(p,"equationFromSegment",(function(){return Nn})),r.d(p,"polyY",(function(){return Pn})),r.d(p,"polyX",(function(){return Cn})),r.d(p,"solve2nd",(function(){return Sn}));var g={};r.r(g),r.d(g,"isPrime",(function(){return Fn})),r.d(g,"prime",(function(){return In}));var y={};r.r(y),r.d(y,"geometric",(function(){return zn})),r.d(y,"geometricDerivative",(function(){return Rn})),r.d(y,"geometricInfty",(function(){return Wn})),r.d(y,"fibonacci",(function(){return Bn}));var w={};r.r(w),r.d(w,"s",(function(){return Jn})),r.d(w,"sumScalar",(function(){return Ln})),r.d(w,"sum",(function(){return Tn})),r.d(w,"dotProduct",(function(){return Yn})),r.d(w,"crossProduct",(function(){return Un})),r.d(w,"scalar",(function(){return Vn})),r.d(w,"mean",(function(){return Xn}));var M={};r.r(M),r.d(M,"bissection",(function(){return Zn})),r.d(M,"newton",(function(){return $n})),r.d(M,"secant",(function(){return _n}));var x={};r.r(x),r.d(x,"default",(function(){return Hn})),r.d(x,"regression",(function(){return Kn}));var b={};r.r(b),r.d(b,"Regresion",(function(){return x})),r.d(b,"covarianceWMeans",(function(){return Qn})),r.d(b,"covariance",(function(){return nt})),r.d(b,"covarianceMatrix",(function(){return tt})),r.d(b,"correlation",(function(){return rt})),r.d(b,"autocovarianceWithN",(function(){return et})),r.d(b,"autocovariance",(function(){return ut})),r.d(b,"autocorrelation",(function(){return it})),r.d(b,"markovProcess",(function(){return ot})),r.d(b,"test",(function(){return at}));var E={};r.r(E),r.d(E,"Binomial",(function(){return u})),r.d(E,"Complex",(function(){return i})),r.d(E,"Coordinate",(function(){return o})),r.d(E,"Degree",(function(){return a})),r.d(E,"Derivative",(function(){return c})),r.d(E,"Fft",(function(){return f})),r.d(E,"Finance",(function(){return h})),r.d(E,"Function",(function(){return s})),r.d(E,"Integral",(function(){return m})),r.d(E,"Linest",(function(){return d})),r.d(E,"Matrix",(function(){return v})),r.d(E,"Polynom",(function(){return p})),r.d(E,"Prime",(function(){return g})),r.d(E,"Series",(function(){return y})),r.d(E,"Stats",(function(){return b})),r.d(E,"Type",(function(){return Dn})),r.d(E,"Utils",(function(){return e})),r.d(E,"Vector",(function(){return w})),r.d(E,"Zeros",(function(){return M}));var k=r(0),A=r.n(k),j=r(16),q=r.n(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=r(1),N=r(2),P=r(8),C="https://github.com/Nexysweb/math-ts",S=function(n){var t="fa fa-"+n.name;return A.a.createElement("i",{className:t})},F={borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5",boxShadow:"0 .25rem .75rem rgba(0, 0, 0, .05)"},I=[{link:"/",name:"Main"}],z=function(n){var t=A.a.createElement("header",null,A.a.createElement("div",{style:F,className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"},A.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},A.a.createElement(P.a,{to:"/"},"Math TS")," ",A.a.createElement("small",null,A.a.createElement("a",{href:C},A.a.createElement(S,{name:"code"})))),A.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},I.map((function(n,t){return A.a.createElement(P.a,{className:"p-2 text-dark",key:t,to:n.link},n.name)})))));return A.a.createElement(A.a.Fragment,null,t,A.a.createElement("div",{className:"container"},n.children))},R=r(4),W=function n(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t>=r?n(t-1,r,t*e):e},B=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(n-n%t)/t},D=function n(t,r){if(t<1)throw Error("n>=1");if(r<0)throw Error("k>=0");return 0===r||r===t?1:1===r?t:r>t?-1:r>B(t,2)+1?n(t,r-B(t,2)-1):n(t-1,r-1)+n(t-1,r)},J=function(n,t){return W(n)/(W(t)*W(n-t))},L=r(5),T=r(6),Y=function(){function n(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(L.a)(this,n),this.x=void 0,this.y=void 0,this.x=t,this.y=r}return Object(T.a)(n,[{key:"multiply",value:function(t){if("number"===typeof t)return this.multiply(new n(t));var r=t.x*this.x,e=t.x*this.y,u=t.y*this.x;return new n(r-t.y*this.y,e+u)}},{key:"sum",value:function(t){return"number"===typeof t?new n(this.x+t,this.y):new n(t.x+this.x,t.y+this.y)}},{key:"modulus",value:function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))}},{key:"argument",value:function(){return Math.atan2(this.y,this.x)}},{key:"conjugate",value:function(){return new n(this.x,-this.y)}},{key:"pow",value:function(t){var r=this.modulus(),e=this.argument(),u=Math.pow(r,t);return new n(u*Math.cos(t*e),u*Math.sin(t*e))}}],[{key:"fromModAndPhase",value:function(t,r){return new n(Math.sin(r)*t,Math.cos(r)*t)}}]),n}(),U=function(n){var t=Math.cos(n),r=Math.sin(n);return new Y(t,r)},V=Y,X=function(n,t){return[Math.sqrt(Math.pow(n,2)+Math.pow(t,2)),Math.atan2(t,n)]},Z=function(n,t){return[n*Math.cos(t),n*Math.sin(t)]},$=function(n,t,r){var e=X(n,t),u=Object(R.a)(e,2);return[u[0],u[1],r]},_=function(n,t,r){var e=Z(n,t),u=Object(R.a)(e,2);return[u[0],u[1],r]},G=function(n,t,r){var e=Math.sqrt(Math.pow(n,2)+Math.pow(t,2)+Math.pow(r,2)),u=Math.acos(r/e);return[e,Math.atan2(t,n),u]},H=function(n,t,r){var e=X(r,n),u=Object(R.a)(e,2);return[u[0],t,u[1]]},K=function(n,t,r){var e=Z(n,r),u=Object(R.a)(e,2),i=u[0];return[u[1],t,i]},Q=function(n,t,r){var e=K(n,t,r);return _(e[0],e[1],e[2])},nn=function(n){return n/Math.PI*180},tn=function(n){return n/180*Math.PI},rn=function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e-5;return(t(n+r)-t(n-r))/(2*r)},en=function(n){var t=n.length;return 0===t?[]:n.map((function(r,e){return n.map((function(n,r){return n.multiply(U(2*Math.PI*e*r/t).multiply(1/Math.sqrt(t)))})).reduce((function(n,t){return n.sum(t)}))}))},un=function(n,t){return n/(1-Math.pow(1+n,-t))},on=function(n,t,r){return n*un(t,r)},an=function(n,t,r,e){return n*Math.pow(1+r,e)-t*(Math.pow(1+r,e)-1)/r},cn=function(n,t,r,e){return an(n,t,r,e)*r},fn=function(n,t,r,e){return(n*r-t)*(Math.pow(1+r,e)-1)/r+t*e},ln=function(n,t,r){return sn(n,[r,t])},hn=function(n,t,r,e){return sn(n,[e,r,t])},sn=function(n,t){return 0===t.length?0:t.map((function(t,r){return t*Math.pow(n,r)})).reduce((function(n,t){return n+t}))},mn=function(n,t,r){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"simpson",u=(t[1]-t[0])/r,i=function n(t,r,e,u,i){return r>e?0:i(t,r,u)+n(t,r+u,e,u,i)};return i(n,t[0],t[1],u,dn(e))},dn=function(n){switch(n){case"simpson":return gn;case"trapezoidal":return pn;default:return vn}},vn=function(n,t,r){return n(t)*r},pn=function(n,t,r){return(n(t)+n(t+r))/2*r},gn=function(n,t,r){return(n(t)+4*n((2*t+r)/2)+n(t+r))*r/6},yn=function(n){var t=n.length;if(t<1)throw Error("series length must be greater than zero");var r=n.map((function(n){return n.y})).reduce((function(n,t){return n+t})),e=n.map((function(n){return n.x})).reduce((function(n,t){return n+t})),u=n.map((function(n){return Math.pow(n.x,2)})).reduce((function(n,t){return n+t})),i=n.map((function(n){return n.x*n.y})).reduce((function(n,t){return n+t})),o=t*u-Math.pow(e,2);return{a:(t*i-r*e)/o,b:(r*u-e*i)/o}},wn=function(n,t){var r=t.a,e=t.b;return n.map((function(n){return{y:r*n+e,x:n}}))},Mn=function(){function n(t){Object(L.a)(this,n),this.m=void 0,this.m=t}return Object(T.a)(n,[{key:"sum",value:function(n){xn(this.m,n)}},{key:"multiply",value:function(n){return En(this.m,n)}},{key:"transpose",value:function(){return kn(this.m)}},{key:"determinant",value:function(){return jn(this.m)}},{key:"inverse",value:function(){return qn(this.m)}}]),n}(),xn=function(n,t){return function(n,t){var r=n.length;if(0===r)throw Error("matrix is empty");if(r!==t.length)throw Error("same number of lines is expected");var e=n[0].length;if(e!==t[0].length)throw Error("same number of columns is expected")}(n,t),n.map((function(n,r){return n.map((function(n,e){return n+t[r][e]}))}))},bn=function(n,t,r){return new Array(t).fill([]).map((function(t){return n.splice(0,r)}))},En=function(n,t){for(var r=function(n,t){var r=n.length,e=t.length;if(0===r)throw Error("matrix 1 is empty");if(0===e)throw Error("matrix 2 is empty");var u=n[0].length,i=t[0].length;if(u!==e)throw Error("check matrix dimensions: (n x m)(m x p) = (n x p)");return[r,u,i]}(n,t),e=Object(R.a)(r,3),u=e[0],i=e[1],o=e[2],a=new Array(u).fill(null).map((function(n){return new Array(o).fill(0)})),c=0;c<u;c++)for(var f=0;f<o;f++){for(var l=0,h=0;h<i;h++)l+=n[c][h]*t[h][f];a[c][f]=l}return a},kn=function(n){var t=n.length,r=n[0].length;return new Array(r).fill(null).map((function(r,e){return new Array(t).fill(null).map((function(t,r){return n[r][e]}))}))},An=function(n){var t=n.length;if(0===t)throw Error("number of rows must be greatere than zero");if(t!==n[0].length)throw Error("number of rows must equal number of columns");return t},jn=function n(t){var r=An(t);if(1===r)return t[0][0];if(2===r)return t[0][0]*t[1][1]-t[0][1]*t[1][0];if(3===r){var e=[[t[1][1],t[1][2]],[t[2][1],t[2][2]]],u=n(e),i=[[t[1][0],t[1][2]],[t[2][0],t[2][2]]],o=n(i),a=[[t[1][0],t[1][1]],[t[2][0],t[2][1]]],c=n(a);return t[0][0]*u-t[0][1]*o+t[0][2]*c}return t[0].map((function(e,u){var i=new Array(r-1).fill(null).map((function(n,e){return new Array(r-1).fill(null).map((function(n,r){var i=r>=u?r+1:r;return t[e+1][i]}))}));return n(i)*t[0][u]*Math.pow(-1,u)})).reduce((function(n,t){return n+t}))},qn=function(n){for(var t=An(n),r=n.map((function(n,r){var e=new Array(t).fill(0);return e[r]=1,n.concat(e)})),e=function(n){r[n]=r[n].map((function(t){return t/r[n][n]}));for(var e=function(t){t!==n&&(r[t]=r[t].map((function(e,u){return e-r[t][n]*r[n][u]})))},u=0;u<t;u++)e(u)},u=0;u<t;u++)e(u);for(var i=new Array(t),o=0;o<t;o++)i[o]=r[o][o],r[o]=r[o].filter((function(n,r){return r>=t}));if(i.reduce((function(n,t){return n+t}))!==t)throw Error("singular matrix - cannot be inverted");return r},On=qn,Nn=function(n,t){var r=(t.y-n.y)/(t.x-n.x);return{m:r,q:n.y-r*n.x}},Pn=function(n,t){return t.m*n+t.q},Cn=function(n,t){var r=t.m;return(n-t.q)/r},Sn=function(n,t,r){var e=Math.pow(t,2)-4*n*r;return[(-t+Math.sqrt(e))/(2*n),(-t-Math.sqrt(e))/(2*n)]},Fn=function n(t,r){return!(r.length>0)||(t%r[0]!==0||t===r[0])&&n(t,r.slice(1,r.length))},In=function(n){for(var t=[3,5],r=7;r<n;)r%10!=5&&Fn(r,t)&&t.push(r),r+=2;return[1,2].concat(t)},zn=function n(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=(1-Math.pow(t,r+1))/(1-t);return 0!=e?u-n(t,e-1):u},Rn=function n(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=(1-(1+r)*Math.pow(t,r)+r*Math.pow(t,1+r))/Math.pow(1-t,2);return 0!=e?u-n(t,e-1):u},Wn=function(n){return 1/(1-n)},Bn=function n(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[1,1];if(0===t)return r;var e=r.slice(r.length-2,r.length),u=Object(R.a)(e,2),i=u[0],o=u[1],a=i+o;return r.push(a),n(t-1,r)},Dn=r(15),Jn=function(n){return 0===n.length?0:n.reduce((function(n,t){return n+t}))},Ln=function(n,t){return n.map((function(n){return n+t}))},Tn=function(n,t){if("number"===typeof t)return Ln(n,t);var r=n.length;if(0===r)throw Error("vector length must be greater than 0");if(r!==t.length)throw Error("vectors must of the the same length");return n.map((function(n,r){return n+t[r]}))},Yn=function(n,t){return Jn(Tn(n,t))},Un=function(n,t){var r=n.length;if(3!==r)throw Error("vector length must be 3");if(r!==t.length)throw Error("vectors must of the the same length");return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]},Vn=function(n){var t=n.length;if(0===t)return 0;var r=n.reduce((function(n,r){return n+Math.pow(r,t)}),0);return Math.pow(r,1/t)},Xn=function(n){if(0===n.length)throw Error("can't be of length 0");var t=n.length;return Jn(n)/t},Zn=function n(t,r,e){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e-4,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1e3,o=(r+e)/2,a=t(o);return a*(1-u)<=0&&a*(1+u)>=0||0==i?o:a*t(r)<0?n(t,r,o,u,i-1):n(t,o,e,u,i-1)},$n=function n(t,r,e){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e-10,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1e3,o=r(t);return Math.abs(o)<=u||0==i?t:n(t-o/e(t),r,e,u,i-1)},_n=function n(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e-4,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3,i=t[0]-r(t[0])*(t[0]-t[1])/(r(t[0])-r(t[1]));return Math.abs(i-t[0])<=e||0==u?i:n([i,t[0]],r,e,u-1)},Gn=function(n){return function(n){var t=n.length,r=Xn(n),e=1/(t-1)*Jn(n.map((function(n){return Math.pow(n-r,2)}))),u=Math.sqrt(e);return{n:t,mean:r,war:e,std:u}}(n).std},Hn=function(){function n(t,r){Object(L.a)(this,n),this.x=void 0,this.y=void 0,this.g=void 0,this.z=void 0,this.a=void 0,Array.isArray(r[0])?(this.x=t,this.y=r):(this.x=t,this.y=kn([r]));var e=kn(this.x);this.g=En(e,this.x),this.z=On(this.g);var u=En(e,this.y);this.a=En(this.z,u)}return Object(T.a)(n,[{key:"estimateY",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.x;return En(n,this.a)}}]),n}(),Kn=function(n,t){return new Hn(n,t).a},Qn=function(n,t,r,e,u){return n.map((function(n,u){var i=t[u];return(n-r)*(i-e)})).reduce((function(n,t){return n+t}))/(u-1)},nt=function(n,t){return Qn(n,t,Xn(n),Xn(t),n.length)},tt=function(n){var t=kn(n),r=t.length;return new Array(r).fill(null).map((function(n,e){return new Array(r).fill(null).map((function(n,r){return nt(t[e],t[r])}))}))},rt=function(n,t){return Qn(n,t,Xn(n),Xn(t),n.length)/(Gn(n)*Gn(t))},et=function(n,t,r){return nt(n.slice(t),n.slice(0,r-t))},ut=function(n,t){return et(n,t,n.length)},it=function(n,t){return function(n,t,r){return ut(n,t)/r}(n,t,ut(n,0))},ot=function(n,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];return[0]},at=function(n,t,r,e){return(t-n)/(r/Math.sqrt(e))},ct=function n(t){var r=t.items,e=t.depth,u=void 0===e?1:e;if(0===r.length)return null;var i=r.sort((function(n,t){return function(n,t){return n>t?1:n<t?-1:0}(n[0],t[0])}));return A.a.createElement("ul",null,i.map((function(t){var r=Object(R.a)(t,2),e=r[0],i=r[1],o="https://github.com/Nexysweb/math-ts/search?q=".concat(e,"&unscoped_q=").concat(e),a=A.a.createElement("a",{href:o},e),c=null===i?null:A.a.createElement(n,{items:Object.entries(i),depth:u+1});return A.a.createElement("li",{key:e},a,c)})))};var ft=function(){return A.a.createElement("div",{className:"container"},A.a.createElement("p",null,"Source can be found in ",A.a.createElement("a",{href:C},A.a.createElement(S,{name:"code"}))),A.a.createElement("h3",null,"List of Available Modules"),A.a.createElement(ct,{items:Object.entries(E)}))},lt=function(){return A.a.createElement("p",null,"Page Not Found")};var ht=Object(O.f)((function(){return A.a.createElement(z,null,A.a.createElement(O.c,null,A.a.createElement(O.a,{exact:!0,path:"/",component:ft}),A.a.createElement(O.a,{path:"/",component:lt})))})),st=N.a({basename:"/math-ts"});q.a.render(A.a.createElement(O.b,{history:st},A.a.createElement(ht,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.9c959be2.chunk.js.map