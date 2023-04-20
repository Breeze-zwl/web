import{_ as s,c as e,o as n,a}from"./app.0bf84864.js";const l="/web/assets/2023-02-01-14-30-58.4d89673b.png",o="/web/assets/2023-02-01-14-26-02.5a9b1719.png",p="/web/assets/2023-02-01-14-22-04.bc84f192.png",b=JSON.parse('{"title":"Vue 生命周期","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建 vue 实例和创建组件的流程基本一致","slug":"创建-vue-实例和创建组件的流程基本一致","link":"#创建-vue-实例和创建组件的流程基本一致","children":[]},{"level":2,"title":"重渲染？","slug":"重渲染","link":"#重渲染","children":[]},{"level":2,"title":"总体流程","slug":"总体流程","link":"#总体流程","children":[]},{"level":2,"title":"解释一下对 Vue 生命周期的理解","slug":"解释一下对-vue-生命周期的理解","link":"#解释一下对-vue-生命周期的理解","children":[{"level":3,"title":"什么是 vue 生命周期","slug":"什么是-vue-生命周期","link":"#什么是-vue-生命周期","children":[]},{"level":3,"title":"vue 生命周期的作用是什么","slug":"vue-生命周期的作用是什么","link":"#vue-生命周期的作用是什么","children":[]},{"level":3,"title":"vue 生命周期有几个阶段","slug":"vue-生命周期有几个阶段","link":"#vue-生命周期有几个阶段","children":[]},{"level":3,"title":"第一次页面加载会触发哪几个钩子","slug":"第一次页面加载会触发哪几个钩子","link":"#第一次页面加载会触发哪几个钩子","children":[]},{"level":3,"title":"多组件（父子组件）中生命周期的调用顺序说一下","slug":"多组件-父子组件-中生命周期的调用顺序说一下","link":"#多组件-父子组件-中生命周期的调用顺序说一下","children":[]}]},{"level":2,"title":"你的接口请求一般放在哪个生命周期中？为什么要这样做？","slug":"你的接口请求一般放在哪个生命周期中-为什么要这样做","link":"#你的接口请求一般放在哪个生命周期中-为什么要这样做","children":[]},{"level":2,"title":"Vue 子组件和父组件执行顺序","slug":"vue-子组件和父组件执行顺序","link":"#vue-子组件和父组件执行顺序","children":[]},{"level":2,"title":"created 和 mounted 的区别","slug":"created-和-mounted-的区别","link":"#created-和-mounted-的区别","children":[]},{"level":2,"title":"一般在哪个生命周期请求异步数据","slug":"一般在哪个生命周期请求异步数据","link":"#一般在哪个生命周期请求异步数据","children":[]}],"relativePath":"vue/lifecycle.md","lastUpdated":1678708626000}'),t={name:"vue/lifecycle.md"},r=a(`<h1 id="vue-生命周期" tabindex="-1">Vue 生命周期 <a class="header-anchor" href="#vue-生命周期" aria-hidden="true">#</a></h1><h2 id="创建-vue-实例和创建组件的流程基本一致" tabindex="-1">创建 vue 实例和创建组件的流程基本一致 <a class="header-anchor" href="#创建-vue-实例和创建组件的流程基本一致" aria-hidden="true">#</a></h2><ol><li>首先做一些初始化的操作，主要是设置一些私有属性到实例中</li><li><strong>运行生命周期钩子函数</strong><code>beforeCreate</code></li><li>进入注入流程：处理属性、computed、methods、data、provide、inject，最后使用代理模式将它们挂载到实例中</li></ol><p>data 为例：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Vue</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">options</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">options</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">observe</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 变成响应式数据</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">methods</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">options</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">methods</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">//直接赋值</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">defineProperty</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;a&quot;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">val</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">entries</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">methods</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">(([</span><span style="color:#E06C75;font-style:italic;">methodName</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">fn</span><span style="color:#ABB2BF;">]) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">methodName</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fn</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">bind</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">//拿到每一个methods</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// bind绑定，使得在vue里，this始终指向vue实例</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">updateComponent</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">_update</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">_render</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Watcher</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">updateComponent</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Vue</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vnode</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">componentOptions</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Vue(options) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> data </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">options</span><span style="color:#B392F0;">.data();</span></span>
<span class="line"><span style="color:#B392F0;">  observe(data); </span><span style="color:#6B737C;">// 变成响应式数据</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> methods </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">options</span><span style="color:#B392F0;">.methods; </span><span style="color:#6B737C;">//直接赋值</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">Object</span><span style="color:#B392F0;">.defineProperty(</span><span style="color:#79B8FF;">this</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;a&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    get() {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">data</span><span style="color:#B392F0;">.a;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    set(val) {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">data</span><span style="color:#B392F0;">.a </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> val;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">Object</span><span style="color:#B392F0;">.entries(methods).forEach(([methodName</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> fn]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">[methodName] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">fn</span><span style="color:#B392F0;">.bind(</span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">//拿到每一个methods</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// bind绑定，使得在vue里，this始终指向vue实例</span></span>
<span class="line"><span style="color:#B392F0;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> updateComponent </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">._update(</span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">._render());</span></span>
<span class="line"><span style="color:#B392F0;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Watcher(updateComponent);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue(</span><span style="color:#79B8FF;">vnode</span><span style="color:#B392F0;">.componentOptions);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="4"><li><strong>运行生命周期钩子函数</strong><code>created</code></li><li>渲染：生成<code>render</code>函数：如果有配置，直接使用配置的<code>render</code>，如果没有，使用运行时编译器，把模板编译为<code>render</code></li><li><strong>运行生命周期钩子函数</strong><code>beforeMount</code></li><li>创建一个<code>Watcher</code>，传入一个函数<code>updateComponent</code>，该函数会运行<code>render</code>，把得到的<code>vnode</code>再传入<code>_update</code>函数执行。 在执行<code>render</code>函数的过程中，会收集所有依赖，将来依赖变化时会重新运行<code>updateComponent</code>函数 在执行<code>_update</code>函数的过程中，触发<code>patch</code>函数，由于目前没有旧树，因此直接为当前的虚拟 dom 树的每一个普通节点生成 elm 属性，即真实 dom。 如果遇到创建一个组件的 vnode，则会进入组件实例化流程，该流程和创建 vue 实例流程基本相同，递归，最终会把创建好的组件实例挂载 vnode 的<code>componentInstance</code>属性中，以便复用。</li><li><strong>运行生命周期钩子函数</strong><code>mounted</code></li></ol><div class="tip custom-block"><p class="custom-block-title">Vue 父子组件挂载顺序</p><p><img src="`+l+'" alt=""></p></div><h2 id="重渲染" tabindex="-1">重渲染？ <a class="header-anchor" href="#重渲染" aria-hidden="true">#</a></h2><ol><li>数据变化后，所有依赖该数据的<code>Watcher</code>均会重新运行，这里仅考虑<code>updateComponent</code>函数对应的<code>Watcher</code></li><li><code>Watcher</code>会被调度器放到<code>nextTick</code>中运行，也就是微队列中，这样是为了避免多个依赖的数据同时改变后被多次执行</li><li>运行生命周期钩子函数<code>beforeUpdate</code></li><li><code>updateComponent</code>函数重新执行</li></ol><ul><li>在执行<code>render</code>函数的过程中，会去掉之前的依赖，重新收集所有依赖，将来依赖变化时会重新运行<code>updateComponent</code>函数</li><li>在执行<code>_update</code>函数的过程中，触发<code>patch</code>函数。</li><li>新旧两棵树进行对比。</li><li>普通<code>html</code>节点的对比会导致真实节点被创建、删除、移动、更新</li><li>组件节点的对比会导致组件被创建、删除、移动、更新</li><li>当新组件需要创建时，进入实例化流程</li><li>当旧组件需要删除时，会调用旧组件的<code>$destroy</code>方法删除组件，该方法会先触发生命周期钩子函数<code>beforeDestroy</code>，然后递归调用子组件的<code>$destroy</code>方法，然后触发生命周期钩子函数- <code>destroyed</code></li><li>当组件属性更新时，相当于组件的<code>updateComponent</code>函数被重新触发执行，进入重渲染流程，和本节相同。</li></ul><ol start="5"><li><strong>运行生命周期钩子函数</strong><code>updated</code></li></ol><div class="tip custom-block"><p class="custom-block-title">Vue 父子组件重新渲染顺序</p><p><img src="'+o+'" alt=""></p></div><h2 id="总体流程" tabindex="-1">总体流程 <a class="header-anchor" href="#总体流程" aria-hidden="true">#</a></h2><p><img src="'+p+'" alt=""></p><h2 id="解释一下对-vue-生命周期的理解" tabindex="-1">解释一下对 <em>Vue</em> 生命周期的理解 <a class="header-anchor" href="#解释一下对-vue-生命周期的理解" aria-hidden="true">#</a></h2><h3 id="什么是-vue-生命周期" tabindex="-1"><strong>什么是 <em>vue</em> 生命周期</strong> <a class="header-anchor" href="#什么是-vue-生命周期" aria-hidden="true">#</a></h3><p>对于 <em>vue</em> 来讲，生命周期就是一个 <em>vue</em> 实例从创建到销毁的过程。</p><h3 id="vue-生命周期的作用是什么" tabindex="-1"><strong><em>vue</em> 生命周期的作用是什么</strong> <a class="header-anchor" href="#vue-生命周期的作用是什么" aria-hidden="true">#</a></h3><p>在生命周期的过程中会运行着一些叫做生命周期的函数，给予了开发者在不同的生命周期阶段添加业务代码的能力。</p><p>其实和回调是一个概念，当系统执行到某处时，检查是否有 <em>hook</em>(钩子)，有的话就会执行回调。</p><p>通俗的说，<em>hook</em> 就是在程序运行中，在某个特定的位置，框架的开发者设计好了一个钩子来告诉我们当前程序已经运行到特定的位置了，会触发一个回调函数，并提供给我们，让我们可以在生命周期的特定阶段进行相关业务代码的编写。</p><h3 id="vue-生命周期有几个阶段" tabindex="-1"><strong><em>vue</em> 生命周期有几个阶段</strong> <a class="header-anchor" href="#vue-生命周期有几个阶段" aria-hidden="true">#</a></h3><p>它可以总共分为 <em>8</em> 个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。</p><ul><li><p><em>beforeCreate</em>：是 <em>new Vue( )</em> 之后触发的第一个钩子，在当前阶段 <em>data、methods、computed</em> 以及 <em>watch</em> 上的数据和方法都不能被访问。</p></li><li><p><em>created</em>：在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 <em>updated</em> 函数。可以做一些初始数据的获取，在当前阶段无法与 <em>DOM</em> 进行交互，如果非要想，可以通过 <em>vm.$nextTick</em> 来访问 <em>DOM</em> 。</p></li><li><p><em>beforeMount</em>：发生在挂载之前，在这之前 <em>template</em> 模板已导入渲染函数编译。而当前阶段虚拟 <em>DOM</em> 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 <em>updated</em>。</p></li><li><p><em>mounted</em>：在挂载完成后发生，在当前阶段，真实的 <em>DOM</em> 挂载完毕，数据完成双向绑定，可以访问到 <em>DOM</em> 节点，使用 <em>$refs</em> 属性对 <em>DOM</em> 进行操作。</p></li><li><p><em>beforeUpdate</em>：发生在更新之前，也就是响应式数据发生更新，虚拟 <em>DOM</em> 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。</p></li><li><p><em>updated</em>：发生在更新完成之后，当前阶段组件 <em>DOM</em> 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。</p></li><li><p><em>beforeDestroy</em>：发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。</p></li><li><p><em>destroyed</em>：发生在实例销毁之后，这个时候只剩下了 <em>DOM</em> 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。</p></li><li><p><strong>activated</strong> keep-alive 专属，组件被激活时调用</p></li><li><p><strong>deactivated</strong> keep-alive 专属，组件被销毁时调用</p></li></ul><h3 id="第一次页面加载会触发哪几个钩子" tabindex="-1"><strong>第一次页面加载会触发哪几个钩子</strong> <a class="header-anchor" href="#第一次页面加载会触发哪几个钩子" aria-hidden="true">#</a></h3><p>会触发 <em>4</em> 个钩子，分别是：<em>beforeCreate、created、beforeMount、mounted</em></p><ul><li><strong><em>DOM</em> 渲染在哪个周期就已经完成</strong></li></ul><p><em>DOM</em> 渲染是在 <em>mounted</em> 阶段完成，此阶段真实的 <em>DOM</em> 挂载完毕，数据完成双向绑定，可以访问到 <em>DOM</em> 节点。</p><h3 id="多组件-父子组件-中生命周期的调用顺序说一下" tabindex="-1"><strong>多组件（父子组件）中生命周期的调用顺序说一下</strong> <a class="header-anchor" href="#多组件-父子组件-中生命周期的调用顺序说一下" aria-hidden="true">#</a></h3><p>组件的调用顺序都是先父后子，渲染完成的顺序是先子后父。组件的销毁操作是先父后子，销毁完成的顺序是先子后父。</p><ul><li><p>加载渲染过程：父<em>beforeCreate</em>-&gt;父<em>created</em>-&gt;父<em>beforeMount</em>-&gt;子<em>beforeCreate</em>-&gt;子<em>created</em>-&gt;子<em>beforeMount</em>- &gt;子<em>mounted</em>-&gt;父<em>mounted</em></p></li><li><p>子组件更新过程：父<em>beforeUpdate</em>-&gt;子<em>beforeUpdate</em>-&gt;子<em>updated</em>-&gt;父<em>updated</em></p></li><li><p>父组件更新过程：父 <em>beforeUpdate</em> -&gt; 父 <em>updated</em></p></li><li><p>销毁过程：父<em>beforeDestroy</em>-&gt;子<em>beforeDestroy</em>-&gt;子<em>destroyed</em>-&gt;父 destroyed</p></li></ul><h2 id="你的接口请求一般放在哪个生命周期中-为什么要这样做" tabindex="-1"><strong>你的接口请求一般放在哪个生命周期中？为什么要这样做？</strong> <a class="header-anchor" href="#你的接口请求一般放在哪个生命周期中-为什么要这样做" aria-hidden="true">#</a></h2><blockquote><p>接口请求可以放在钩子函数 <em>created、beforeMount、mounted</em> 中进行调用，因为在这三个钩子函数中，<em>data</em> 已经创建，可以将服务端端返回的数据进行赋值。</p><p>但是推荐在 <em>created</em> 钩子函数中调用异步请求，因为在 <em>created</em> 钩子函数中调用异步请求有以下优点：</p><ul><li>能更快获取到服务端数据，减少页面 <em>loading</em> 时间</li><li><em>SSR</em> 不支持 <em>beforeMount 、mounted</em> 钩子函数，所以放在 <em>created</em> 中有助于代码的一致性</li><li><em>created</em> 是在模板渲染成 <em>html</em> 前调用，即通常初始化某些属性值，然后再渲染成视图。如果在 <em>mounted</em> 钩子函数中请求数据可能导致页面闪屏问题</li></ul></blockquote><h2 id="vue-子组件和父组件执行顺序" tabindex="-1">Vue 子组件和父组件执行顺序 <a class="header-anchor" href="#vue-子组件和父组件执行顺序" aria-hidden="true">#</a></h2><p><strong>加载渲染过程：</strong></p><ol><li>父组件 beforeCreate</li><li>父组件 created</li><li>父组件 beforeMount</li><li>子组件 beforeCreate</li><li>子组件 created</li><li>子组件 beforeMount</li><li>子组件 mounted</li><li>父组件 mounted</li></ol><p><strong>更新过程：</strong></p><ol><li>父组件 beforeUpdate</li><li>子组件 beforeUpdate</li><li>子组件 updated</li><li>父组件 updated</li></ol><p><strong>销毁过程：</strong></p><ol><li>父组件 beforeDestroy</li><li>子组件 beforeDestroy</li><li>子组件 destroyed</li><li>父组件 destoryed</li></ol><h2 id="created-和-mounted-的区别" tabindex="-1">created 和 mounted 的区别 <a class="header-anchor" href="#created-和-mounted-的区别" aria-hidden="true">#</a></h2><ul><li>created:在模板渲染成 html 前调用，即通常初始化某些属性值，然后再渲染成视图。</li><li>mounted:在模板渲染成 html 后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作。</li></ul><h2 id="一般在哪个生命周期请求异步数据" tabindex="-1">一般在哪个生命周期请求异步数据 <a class="header-anchor" href="#一般在哪个生命周期请求异步数据" aria-hidden="true">#</a></h2><p>我们可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。</p><p>推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：</p><ul><li>能更快获取到服务端数据，减少页面加载时间，用户体验更好；</li><li>SSR 不支持 beforeMount 、mounted 钩子函数，放在 created 中有助于一致性。</li></ul>',46),c=[r];function i(B,d,y,m,u,F){return n(),e("div",null,c)}const A=s(t,[["render",i]]);export{b as __pageData,A as default};
