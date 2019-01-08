(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{397:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"title-how-to-run-the-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title-how-to-run-the-node","aria-hidden":"true"}},[e._v("#")]),e._v(" title: How to run the node")]),e._v(" "),s("h2",{attrs:{id:"what-you-ll-need"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-you-ll-need","aria-hidden":"true"}},[e._v("#")]),e._v(" What you'll need")]),e._v(" "),s("ul",[s("li",[e._v("JDK 1.8")]),e._v(" "),s("li",[e._v("Maven 3.3+")]),e._v(" "),s("li",[e._v("Git 2.x")]),e._v(" "),s("li",[e._v("IDE ( Optional )")])]),e._v(" "),s("h2",{attrs:{id:"getting-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-source","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Source")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git clone https://github.com/nuls-io/nuls.git && cd nuls\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"build-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-source","aria-hidden":"true"}},[e._v("#")]),e._v(" Build Source")]),e._v(" "),s("p",[e._v("Make sure the JDK version is 1.8")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ mvn -v\nApache Maven 3.5.4 (1edded0938998edf8bf061f1ceb3cfdeccf443fe; 2018-06-18T02:33:14+08:00)\nMaven home: /usr/local/Cellar/maven/3.5.4/libexec\nJava version: 1.8.0_171, vendor: Oracle Corporation, runtime: /Library/Java/JavaVirtualMachines/jdk1.8.0_171.jdk/Contents/Home/jre\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("If the Java version is not 1.8, it is recommended to install and set it to version 1.8.")]),e._v(" "),s("p",[e._v("Now,we can build the node.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ mvn clean package\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("After the command is successfully executed, you can find the compilation result in the path.")]),e._v(" "),s("blockquote",[s("p",[e._v("client-module/client/target/nuls-node.tar.gz")])]),e._v(" "),s("h2",{attrs:{id:"run-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-node","aria-hidden":"true"}},[e._v("#")]),e._v(" Run Node")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ mvn clean package\n$ cd client-module/client/target\n$ mkdir nuls-node\n$ tar -zxvf nuls-node.tar.gz -C nuls-node\n$ cd nuls-node/bin\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("ul",[s("li",[e._v("Using start.sh running the nuls process.")]),e._v(" "),s("li",[e._v("Using stop.sh stop the nuls process.")]),e._v(" "),s("li",[e._v("Using cmd.sh running the nuls shell.")])]),e._v(" "),s("h2",{attrs:{id:"use-idea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-idea","aria-hidden":"true"}},[e._v("#")]),e._v(" Use IDEA")]),e._v(" "),s("p",[e._v("Import the project folder into the IDEA and set configurations.")]),e._v(" "),s("p",[s("img",{attrs:{src:"assert/launcher.jpg",alt:"图片"}})])])}],!1,null,null,null);n.options.__file="sourceCodeStartNULS.md";t.default=n.exports}}]);