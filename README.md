# Vue2
Vs code快捷键
多行输入： Shift+alt鼠标左键选择
删除当前行： ctrl+shift+k
复制当前行到下一行： ctrl+c ctrl+v
直接换行： ctrl +enter
Ctrl +m+o 折叠所有






 
•	Vue
一套用于构建用户页面的渐进式（自定向上逐层应用）JavaScript框架
简单应用：只需要轻量小巧的核心库
复杂应用：可以引入各式各样的Vue插件
特点：
1.	组件化模式，提高代码复用率，且让代码更好维护
2.	声明式编码，让编码人员无需直接操作DOM，提高开发效率
3.	使用虚拟DOM＋优秀的Diff算法，尽量复用DOM节点
安装Vue
Vue是一个构造函数，应该new一个Vue
<script>引入
1.	下载开发版本Vue
2.	安装开发者工具Vue Devtools
3.	去掉生产环境提示 Vue.config.productionTip 设置成false
（open with live server ,在端口号上开了一台内置小服务器，把整个工程所有的文件和文件夹作为这台服务器的根资源去使用  ）
 
两个class相同容器，第一个能正常解析，第二个没人解析（一个Vue实例只能对应一个容器）
 
 
两个Vue实例对应一个容器，第二个也无法解析，还报错（第一个已经接管了，第二个执行了但没接管）
 

容器跟Vue实例是一一对应的，{{}}里面写Js表达式



Js表达式和js代码（语句）
1.	表达式：一个表达式会产生一个值，可以放在任何一个需要值得地方
（1）	a
（2）	a+b
（3）	demo (1)
（4）	x===y?’a’:’b’
2.	代码
（1）	if (){}
（2）	for (){}
初识Vue
1.	想让Vue工作，必须创建一个Vue实例，且传入一个配置对象（el data）
2.	Root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法
3.	Root容器里的代码被称为Vue模板
(容器作用：为Vue提供模板，把Vue工作成功让他知道往哪放)
4.	Vue实例和容器是一一对应的
5.	真实开发中只有一个Vue实例，并且会配合着组件一起使用
6.	{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性
7.	一旦data中的数据发生改变，那么模板中用到该数据的地方也会自动更新
 Vue模板语法有两大类：
1.	插值语法：
功能：用于解析标签体内容
写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性
2.	指令语法：
功能：用于解析标签（包括：标签属性，标签体内容，绑定事件…）
举例：v-bind:href=”xxx” 或简写为 :href=”xxx”,xxx同样要写js表达式，且可以直接读取到data中的所有属性（v-bind是单向数据绑定）
备注：Vue中有很多的指令，且 形式都是：v-????,此处只是拿v-bind举例
   Vue中有两种数据绑定的方式：
1.	单向绑定（v-bind）:数据只能从data流向页面
2.	双向绑定（v-model）:数据不仅能从data流向页面，还能从页面流向data
备注：
1.	双向绑定一般用于表单类元素上，如:input,select…
2.	v-model:value 可以简写为v-model，因为v-model默认收集的就是value值
     data与el的两种写法
1.	el有两种写法
1)	new Vue时候配置el属性
2)	先创建Vue实例，随后再通过vm.&mount(‘#root’)指定el的值
2.	Data有两种写法
1)	对象式
2)	函数式
如何选择，学习组件时必须用函数式，否则会报错
3.	一个重要的原则:
由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例

MVVM


 
1.	Data中的所有属性，最后都出现在vm身上
2.	Vm身上的所有属性，及Vue原型上的所有属性，在Vue模板中都可以直接使用
let number = 18
let person = {
name: '张三',
sex: '男',
}

Object.defineProperty(person, 'age', {
value: 18,
writable: true, //控制属性是否可以被修改，默认值是false
enumerable: true, //控制属性是否可以枚举，默认值是false
configurable: true //控制属性是否可以被删除，默认值是false

//当有人读取person的age属性，get函数(getter)就会被调用，且返回值就是age的值
get() {
return number
},
//当有人修改person的age属性，set函数(setter)就会被调用，且会收到修改的具体值
set(value) {
console.log('有人修改',value);
number=value
}
})

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）
 

1.	Vue中的数据代理:
通过vm对象来代理data对象中属性的操作
2.	Vue中数据代理的好处：
 	更加方便的操作data中的数据
3.	基本原理
 	通过Object.difinePorperty( )把data对象中所有属性添加到vm上
 	为每一个添加到vm上的属性，都指定一个getter/setter
 	在getter/setter内部去操作（读/写）data中对应的属性



事件的基本使用：
1.	使用v-on:xxx或者@xxx绑定事件，其中xxx是事件名
2.	事件的回调需要配置在methods对象中，最终会在vm上
3.	methods中配置的函数，不要用箭头函数，否则this就不是vm了
4.	methods中配置的函数，都是被Vue所管理的函数，this的指向是vm，或组件实例对象
5.	@click=”demo”和@click=”demo($event)”效果一致，但后者可以传参
Vue中的事件修饰符：
1.	prevent：阻止默认事件
2.	stop：阻止事件冒泡
3.	once：事件只触发一次
4.	capture：使用事件的捕获模式
5.	self：只有event.target是当前操作的元素时才触发事件
6.	passive：事件的默认行为立即执行，无需等待事件回调执行完毕
可以连续写，例如：@click . stop . prevent意思是先阻止冒泡，再阻止默认事件
Vue中常见的案件别名：
回车=>enter
删除=>delete（捕获删除和退格键）
退出=>esc
空格=>space
换行=>tab（特殊：必须配合keydown使用）
上下左右=> up, down ,left , right
Vue未提供别名的按键，可以使用按键原始的key值取绑定，但注意要转为kebab-case(短横线命名) (想知道叫什么名就可以event.key 多个单词组成的名字全变小写中间用”-”连接)
系统修饰键（用法特殊）：ctrl ,alt ,shift , meta
1.	配合keyup使用，按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发
2.	配合keydown使用，正常触发事件
也可以使用keyCode去指定具体按键（不推荐）
Vue.config.keyCodes.自定义键名 = 键码，可以定制按键别名
Keyup.ctrl.y只有点ctrl和y的时候才行


计算属性：
1.	定义：要用的东西不存在，要通过已有属性计算得来
2.	原理：底层借助了Object . defineproperty 方法提供的getter和setter
3.	Get函数什么时候执行
1）	初次读取时会执行一次
2）	当依赖的数据发生改变时会被再次调用
4.	优势：与methods实现相比，内部有缓存机制（可复用），效率更高 ，调试方便
5.	备注：
1）	计算属性最终会出现在vm上，直接读取使用即可
2）	如果计算属性要被修改，那必须写set函数去相应修改，且set中要引起计算时依赖的数据发生改变

监视属性watch: （当监视属性和计算属性都可实现时用计算属性，watch可以处理一些异步回调）
1.	当被监视的属性变化时，回调函数自动调用，进行相关操作
2.	监视的属性必须存在，才能进行监视
3.	监视的两种写法
1）	 New Vue时传入watch配置
2）	通过vm.$watch监视

深度监视  （对象的key值正常是一个字符串，日常编写时省略引号）
1.	Vue中的watch默认不检测对象内部值的改变（一层）
2.	配置deep:true可以检测对象内部值的改变（多层）
备注：
1.	Vue自身可以检测对象内部值的变化，但是Vue提供的watch默认不可以
2.	使用watch时可以根据数据的具体结构，决定是否采用深度监视
Computed和watch之间的区别：
1.	computed能完成的功能，watch都可以完成
2.	watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作
两个重要小原则：
1.	所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象
2.	所有不被Vue所管理的函数（定时器回调函数，ajax的回调函数等），最好写成箭头函数，这样this的指向才是vm或组件实例对象

绑定样式：
1.	Class样式
写法：class=”xxx” xxx可以是字符串，对象，数组
字符串写法适用于：类名不确定，要动态获取
对象写法是用于：要绑定多个样式，个数不确定，名字也不确定
数组写法适用于：要绑定多个央视，个数确定，名字也确定，但不确定用不用
2.	Style样式
：style = “{ fontSize : xxx} “ 其中xxx是动态值
：style = “[a,b]” ，其中a,b是样式对象

条件渲染：
1.	V-if
写法：
1）	V-if = “表达式“
2）	V-else-if= “表达式“
3）	V-else = “表达式“
适用于：切换频率较低的场景
特点：不展示的DOM元素直接被移除
注意：v-if 可以和：v-else-if , v-else一起使用但是结构不能被打乱
2.	V-show
写法：v-show=“表达式“
适用于：切换频率较高的场景
特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
3.	备注：使用v-if时，元素可能无法获取到，而v-show一定能
v-for指令
1.	用于展示列表数据
2.	语法：v-for = ”(item , index) in xxx    :key= “yyy” //key是唯一的
3.	可遍历：数组，对象，字符串，指定次数
面试题：react,vue中的key有什么作用？（key的深层原理）
1.	虚拟DOM中key的作用：
key是虚拟DOM对象的标识，当状态中的数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】
2.	对比规则：
1）	旧虚拟DOM 中找到了与新虚拟DOM相同的key：
①	若虚拟DOM中内容没变，直接用之前的真实DOM
②	若虚拟DOM中的内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
2）	旧虚拟DOM中未找到与新虚拟DOM相同的key
创建新的真实DOM，随后渲染到页面
3.	用index作为key可能会引发的问题
1)	如果对数据进行：逆序添加，逆序删除等破坏顺序操作：
会产生没有必要的真实DOM更新界面效果没问题但是效率低
2)	如果结构中还包含输入类的DOM：
会产生错误DOM更新=>界面有问题
4.	开发中如何选择key
1)	最好使用每条数据的唯一标识作为key,比如id,手机号等
2)	如果不存在对数据的逆序添加，逆序删除等破坏顺序操作，仅应用于渲染列表用于展示，使用index作为key是没有问题的

 
Vue 监视数据的原理：
1.	Vue会监视data中所有层次的数据
2.	如何监视对象中的数据
     通过setter实现监视，且要在new Vue时就传入要监视的数据
1）	对象中后追加的属性，Vue默认不做响应式处理
2）	如需给后添加的属性做响应式，请使用如下API
Vue.set(target, propertyName/index,  value)
Vm. $set (target, propertyName/index, value)
3.	如何监视数组中的数据
通过包裹数组更新元素的方法实现，本质上就是：
1）	调用原生对应的方法对数组进行更新
2）	重新解析模板，进而更新页面
4.	在Vue修改数据中的某个元素一定要用如下方法：
①	  使用这些API：
 
②	Vue .set ( )/ vm . $set ( )
特别注意：Vue .set ( )/ vm . $set ( ) 不能给vm或vm的跟数据对象添加属性
过滤器：
定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）
语法： 
1.	注册过滤器 ： Vue .filter (name ,callback)或 new Vue{ filters : { } }
2.	使用过滤器 ： { { xxx | 过滤器名} } 或V-bind : 属性 =‘ xxx | 过滤器名 ‘
 备注： 
1.	过滤器也可以接受额外参数，多个过滤器可以串联
2.	并没有改变有岸本的数据，是产生新的对应数据
v-text指令
1.	作用 ： 向其所在的节点中渲染文本内容
2.	与插值语法的区别 ： v-text 会替换节点中的内容 ，{{xxx}}不会
v-html指令：
1.	作用：向指定节点中渲染包含html结构的内容
2.	与插值语法的区别：
1）	v-html会替换掉节点中的所有的内容 ， {{xx}} 则不会
2）	v-html可以识别html结构
3.	严重注意：v-html有安全性问题！！！
1）	在网站上动态渲染任意HTML是非常危险的，容易导致xss攻击
2）	一定要在可信的内容上使用v-html,永远不要用在用户提交的内容上！
 
v-clock指令（没有值）
1.	本质是一个特殊属性：Vue实例创建完毕并接管容器后，会删掉v-clock属性
2.	使用css配合v-clock可以解决网速慢时页面展示出{{xxx}}的问题
v-once指令：
1.	V-once所在节点在初次动态渲染后，就视为静态内容
2.	以后数据的改变不会引起v-once所在结构更新，可以用于优化性能
v-pre指令
1.	跳过其所在节点的编译过程
2.	可利用他跳过：没有使用指令语法，没有使用插值语法的节点，会加快编译
自定义指令：
1.	定义语法：
1）	局部指令：
new Vue ({
directives: {指令名：配置对象} }）或
new Vue ({
directives:{指令名：回调函数} }）
2）	全局指令：
Vue.directive(指令名，配置对象) 或
Vue.directive(指令名，回调函数)
2.	配置对象中常用的3个回调
1）	Bind: 指令与元素成功绑定时调用
2）	Inserted: 指令所在元素被插入页面时调用
3）	Update：指令所在模板结构被重新解析时调用
3.	备注：
1）	指令定义时不加v- ，但使用时要加v-
2）	指令名如果是多个单词，要使用kebab-case（短横杠连接）命名方式，不要用camelCase（驼峰）命名 
生命周期：
1.	又名：生命周期回调函数，生命周期函数，生命周期钩子
2.	是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数
3.	生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的
4.	生命周期函数中的this指向是vm或组件实例对象
   
 

常用的生命周期钩子：
1.	Mounted: 发送ajax请求，启动定时器，绑定自定义事件，订阅消息等【初始化操作】
2.	beforeDestroy: 清除定时器，解绑自定义事件，取消订阅消息等【收尾工作】
关于销毁Vue实例
1.	销毁后借助Vue开发者工具看不到任何信息
2.	销毁后自定义事件会失效，但原生Dom事件仍然有效
3.	一般不会在beforeDestroy操作数据，因为即使操作数据，也不会再出发更新流程了



组件
Vue 中使用组件的三大步骤：
1.	定义组件（ 创建组件）
2.	注册组件
3.	使用组件（写组件标签）

一．	如何定义一个组件
使用Vue.extend(option)创建，其中options和new Vue(options)时传入的那个options几乎一样
区别如下：
1.	el不要写，为什么？——最终所有的组件都要经过一个vm的管理，由vm的el决定服务哪个容器
2.	data必须写成函数形式，为什么？——避免组件被复用时，数据存在引用关系
备注：使用template可以配置组件结构
二．	如何注册组件
1.	局部注册：靠new Vue 的时候传入components选项
2.	全局注册：靠Vue.component (‘组件名’，组件)
三．	编写组件标签
几个注意点：
1.	关于组件名： 
一个单词组成：
	第一种写法（首字母小写） ： school
	第二种写法（首字母大写）：School
多个单词组成：
	第一种写法（kebab-case） ：my-school
	第二种写法（CamelCase）：MySchool（需要Vue脚手架支持）
备注：
1）	组件名尽可能回避HTML中已有的元素名称
2）	可以使用name配置项指定组件在开发者工具中呈现的名字
2.	关于组件标签
第一种写法：<school></school>
第二种写法：<school/>（不用使用脚手架时，第二种会导致后续组件不能渲染）
3.	一种简写
const school =Vue.extend(options) 可简写为：const school = options 
关于VueComponent:
1.	School组件的本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的
2.	我们只需要写<school></school>或<school/>，Vue解构时会帮我们创建school组件的实例对象
即Vue帮我们执行的：new VueComponent(options)
3.	特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent
4.	关于this指向：
1）	组件配置中：
data函数，methods中的函数，watch中的含事故，computed中的函数，他们的this均是【VueComponent】
2）	new. Vue () 配置中：
data函数，methods中的函数，watch中的含事故，computed中的函数，他们的this均是【Vue实例对象】
5.	VueComponent的实例对象以后简称vc（也可以称为组件实例对象）
Vue的实例对象，以后简称vm

1.	一个重要的内置关系：VueComponent . prototype. __proto__=== Vue. prototype
2.	为什么要有这么关系：让组件实例对象（vc）可以访问到Vue原型上的属性和方法
关于不同版本的Vue:
1.	Vue.js与vue.runtime.xxx.js的区别：
1）	Vue.js是完整的Vue, 包含：核心功能+模板解析器
2）	Vue.runtime.xxx.js是运行版的Vue,只包含：核心功能：没有模板解析器
2.	因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定1具体内容
 
Ref属性
1.	被用来给元素或子组件注册引用信息（id的替代者）
2.	应用在html标签上获取的是真实的dom元素，应用在组件标签上是组件实例对象（vc）
3.	使用方法：
打标识：<h1 ref =”xxx”>……</h1>或 <School ref = “xxx” ></School>
获取：this.$refs.xxx
配置项props
	功能：让组件接收外部传过来的数据
1.	传递数据：
<Demo name =”xxx”/>
2.	接收数据
第一种方式（只接收）：
props: [‘name’]
第二种方式（限制类型）：
props: {
name: String
}
	第三种方式（限制类型，限制必要性，指定默认值）
		props: {
		name: {
		type: String, //类型
		required: true, //必要性
		default: ‘XX’, //默认值
mixin混合(混入)
	功能：可以把多个组件公用的配置提取成一个混入对象
	使用方式：
	第一部定义混合：
	{
		data () {…}
		methods: {…}
		…
	}
	第二步使用混入：
1）	全局混入：Vue. mixin(xxx)
2）	局部混入：mixins:[‘xxx’]
插件：
功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue，第二个参数是插件使用者传递的数据
定义插件：
	对象.install = function (Vue, options){
//1. 添加全局过滤器
Vue. filter (…)
//2. 添加全局指令
Vue.direcive(…)
//3. 配置全局混入（混合）
Vue. mixin (…)
//4. 添加实例方法
Vue.prototype. $myMethod = function () {…}
Vue.prototype. $myProperty = xxx
Scoped样式
	作用：让样式在局部生效，防止冲突
	写法：<style scoped>
总结Todolist案例
1.	组件化编码流程
1）	拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
2）	实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
①	   一个组件在用：放在组件自身即可
②	一些组件在用：放在他们共同的父组件上 （状态提升）
3）	实现交互：从绑定事件开始
2.	Props适用于：
1）	父组件===>子组件 通信
2）	子组件===>父组件 通信 (要求父组件给子组件一个函数)
3.	使用v-model时要切记：绑定的值不能是props传过来的值，因为props是不可以修改的
4.	props传过来的如果是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做
webStorage：
1.	存储内容大小一般为5MB左右（不同浏览器可能还不一样）
2.	浏览器通过Window.sessionStorage 和Window.localStorae 属性来实现本地存储机制
3.	相关API：
1）	xxxStorage.setItem(‘key’,’value’)
该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值

2）	xxxStorage.getItem(‘key’)
该方法接受一个键名作为参数，返回键名对应的值
3）	xxxStorage.removeItem(‘key’)
该方法接受一个键名作为参数，并把该键名从存储中删除
4）	xxxStorage.clear()
该方法会清空存储中的所有数据
4.	备注
1）	SessionStorage存储的内容会随着浏览器窗口关闭而消失
2）	LocalStorage存储的内容，需要手动清除才能消失
3）	xxxStorage.getItem(XXX)如果xxx对应的value获取不到，那么getItem的返回值是null
4）	JSON.parse(null)的结果依然是null
组件的自定义事件
1.	一种组件间通信的方式，适用于：子组件===》父组件
2.	使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
3.	绑定自定义事件
1）	第一种：在父组件中<Demo @kuluomi=’test’/>或<Demo v-on :kuluomi =’test’/>
2）	第二种，在父组件中
<Demo ref =” demo”/>
……
Mounted () {
	This. $refs.xxx. $on (‘kuluomi’, this.test)
}
3)	若现在自定义事件只能触发一次，可以使用once修饰符，或￥once方法
4.	触发自定义事件：this.$emit (‘kuluomi’, 数据)
5.	解绑自定义事件this.$off(‘kuluomi’)
6.	组件上也可以绑定原生DOM事件，需要native修饰符
7.	注意：通过this.$refs.xxx. $on (‘kuluomi’, 回调) 绑定自定义事件时，回调要么配置在methods中，或者用箭头函数，否则this指向有问题
全局事件总线（GlobalEventBus）
1.	一种组件间通信的方式，适用于任意组件间通信
2.	安装全局事件总线
 
3.	使用事件总线：
1）	接收数据：A组件像接收数据，则在A组件中给$Bus绑定自定义事件，事件的回调留在A组件自身
 
2）	提供数据 this.$bus. $emit (‘xxx’, 数据)
4.	最好在beforeDestory钩子中，用$off去解绑当前组件所用到的事件
消息订阅与发布（pubsub）
1.	一种组件间通信的方式，适用于任意组件间通信
2.	使用步骤
1）	安装pubsub: npm i pubsub-js
2）	引入 import pubsub from "pubsub-js";
3）	接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
 
4）	提供数据：pubsub . publish (‘xxx’, 数据)
5）	最好在beforeDestory钩子中，用pubsub.unsubscript(pid)去取消订阅
nextTick
1.	语法：this.$nextTick(回调函数)
2.	作用，在下一次DOM更新结束后执行其指定的回调
3.	什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行
Vue封装的过度与动画
1.	作用：在插入，更新或移除DOM元素时，在合适的时候给元素添加样式类名
2.	图示

 
3.	写法：
1）	准备好样式
·	元素进入的样式
1.	V-enter：进入的起点
2.	V-enter-active：进入过程中
3.	V-enter-to：进入的终点
·	元素离开的样式
1.	V-leave：离开的起点
2.	V-leave-active：离开过程中
3.	V-leave-to：离开的终点
2）	使用<transition>包裹要过渡的元素，并配置name属性
<transition name =’xiu’>
	<h1 v-show=’isShow’></h1>
</transition>
3）	备注：若有多个元素需要过度，则需要使用：<transition-group>且每个元素需要有key值
Vue脚手架配置代理
1.	在vue.config.js中添加如下配置
devServer: {
proxy:http://localhost:5000
}
说明：
1）	优点：配置简单，请求资源时可直接发给前端（8080）即可
2）	缺点：不能配置多个代理，不能灵活的控制请求是否走代理
3）	工作凡是：若按照上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先匹配前端资源）
2.	编写vue.config.js配置具体代理规则
module. exports = {
  devServer: {
    proxy: {
      '/api': {//匹配左右以 ‘/api’开头的请求路径
        target: '<url>', //代理目标的基础路径
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
changeOrigin为true服务器收到的请求头中host为5000
changeOrigin为false服务器收到的请求头中host为8080（默认为true）
说明：
1）	优点：可以配置多个代理，且可以灵活的控制请求是否走代理
2）	缺点：配置略微繁琐，请求资源时必须加前缀


插槽
1.	作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件===》子组件
2.	分类：默认插槽，具名插槽，作用域插槽
3.	使用方式
1）	默认插槽
 
2）	具名插槽
 
3）	作用域插槽
·	理解：数据在组件自身，但根据数据生成的结构需要组件的使用者来决定（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）
·	具体编码
 
 
Vuex
Vuex是什么：
1.	概念：专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间的通信的方式，且适用于任意组件间通信
2.	Github地址 ：https://github.com/vuejs/vuex

 

 
什么时候使用Vuex
1.	多个组件依赖于同一状态
2.	来自不同组件的行为需要变更同一状态
Vuex工作原理图
 
搭建环境
1.	创建文件src/store/index.js
 
2.	在main.js中创建vm时传入store配置项
 
基本使用
1.	初始化数据，配置actions ，配置mutations，操作文件store.js
 
 
2.	组件中读取vuex中的数据：$store.state.sum
3.	组件中修改vuex中的数据：$store.dispatch(‘action中的方法名’，数据)或$store.commit(‘mutations中的方法名’，数据)
4.	备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions,即不写dispatch，直接编写commit
Getters的使用
1.	概念：当state中的数据需要经过加工后再使用时，可以使用getters加工
2.	在store.js中追加getters配置
 
3.	组件中读取数据：$store.getters.bigSum
四个map方法的使用
1.	mapState方法：用于帮助我们映射state中的数据为计算属性
 
2.	mapGetters方法：用于帮助我们映射getters中的数据为计算属性
 
3.	mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store. dispatch(xxx)的函数
 
模块化＋命名空间
1.	目的：让代码更好维护，让更多数据分类更加明确
2.	修改store.js
 
3.	开启命名空间后，组件中读取state数据
 
4.	开启命名空间后，组件中读取getters数据
 
5.	开启命名空间后，组件中调用dispatch
 
6.	开启命名空间后，组件中调用commit
 
路由Vue-router
 
 
1.	相关理解
1）	Vue-router的理解
Vue的一个插件库，专门用来实现SPA应用
2）	对SPA应用的理解
·	单页web应用（single page web application, SPA）
·	整个应用只有一个完整的页面
·	点击页面中的导航链接不会刷新页面，只会做页面的局部更新
·	数据需要通过ajax请求获取
3）	路由的理解
·	什么是路由
1.	一个路由就是一组映射关系（key-value）
2.	Key为路径，value可能是function或者component
·	路由分类
1.	后端路由
1）	理解：value是function，用于处理客户端提交的请求
2）	工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据
2.	前端路由
1）	理解：value是component，用于展示页面内容
2）	工作过程：当浏览器的路径改变时，对应的组件就会显示
基本使用：
1.	安装router，命令：npm i vue-router
2.	应用插件：Vue.use(VueRouter)
3.	编写router配置项
 
4.	实现切换 （active-class可配置高亮样式）
<router-link active-class = ‘class’ to = ‘/about’>About</router-link>
5.	指定展示位置
<router-view></router-view>
几个注意点
1.	路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
2.	通过切换，‘隐藏’了的路由组件，默认是被销毁的，需要的时候再去挂载
3.	每个组件都有自己的￥route属性，里面存储着自己的路由信息
4.	整个应用只有一个router，可以通过组件的￥router属性获取到
多级路由
1.	配置路由规则，使用children配置项
 
2.	跳转（要写完整路径）
<router-link to = ‘/home/news’>News</router-link>
路由的query参数
1.	传递参数
 
2.	接收参数
$route.query.id
$route. query. title
命名路由
1.	作用：可以简化路由的跳转
2.	如何使用
1）	给路由命名
 
2）	简化跳转
 
路由的params参数
1.	配置路由，声明接收params参数
 
2.	传递参数
 
特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置
3.	接收参数
$route.param.id
$route. param. title
路由的props配置
1.	作用：让路由组件更方便的收到参数
 
<router-link>的replace属性
1.	作用：控制路由跳转时操作浏览器历史记录的模式
2.	浏览器的历史记录有两种写入方式：分别是push和replace，push是追加历史记录，replace是替换当前记录，路由跳转时候默认为push
3.	如何开启replace模式：<router-link replace ………..>News</router-link>
编程式路由导航
1.	作用：不借助<router-link>实现路由跳转，让路由跳转更加灵活
2.	具体编码
 
直接把router-link中to配置的对象拿出来了
 back () {
      this. $router. back ()
    },
  forward () {
      this. $router.forward ()
    },
  go () {
    this. $router. go (-2) //相当于点了两下后退
  }
缓存路由组件
1.	作用：让不展示的路由组件保持挂载，不被销毁
2.	具体编码：
<keep-alive include =” News”>
<router-view></router-view>
</keep-alive>
3.	缓存多个 : include="['News','Message']"
两个新的生命周期钩子
1.	作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态
2.	具体名字
1.	Activated路由组件被激活时触发
2.	Deactivated 路由组件失活时触发
（还有一个生命周期钩子是this.$nextTick(回调函数) ）
路由守卫
1.	作用：对路由进行权限控制
2.	分类：全局守卫，独享守卫，组件内守卫
3.	全局守卫
 
4.	独享路由守卫
 
5.	组件内守卫
//进入守卫，通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next) {
},
//离开守卫，通过路由规则，离开该组件时被调用
beforeRouteLeave (to, from, next) {
},
打包：npm run build
新建文件夹
Vscode打开
npm init
npm i express 起个名字 按回车
node server启动
npm i connect-history-api-fallback解决history模式放到production环境下刷新404的问题（引入const history = require ('connect-history-api-fallback') 和使用app.use(history())）
路由器的两种工作模式
1.	对于一个url来说，什么是hash值 ——#及其后面的内容就是hash值
2.	Hash值不会包含在HTTP请求中，即：hash值不会带给服务器
3.	Hash模式：
1.	地址中永远带着#号，不美观
2.	若以后降低至通过第三方手机app分享，若app校验严格，则地址会被标记为不合法
3.	兼容性较好
4.	History模式
1.	地址干净，美观
2.	兼容性和hash模式比较差
3.	应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题
 
 






