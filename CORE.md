# 编程核心知识图谱

## 基础
- [`数据结构`](core/data_structure)
* [数据结构](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#数据结构)
	* [队列](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#队列)
	* [集合](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#集合)
	* [链表、数组](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#链表数组)
	* [字典、关联数组](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#字典关联数组)
	* [栈](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#栈)
	* [树](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#树)
		* [二叉树](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#二叉树)
		* [完全二叉树](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#完全二叉树)
		* [平衡二叉树](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#平衡二叉树)
		* [二叉查找树（BST）](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#二叉查找树bst)
		* [红黑树](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#红黑树)
		* [B-，B+，B*树](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#b-bb树)
		* [LSM 树](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#lsm-树)
	* [BitSet](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#bitset)

    # 数据结构

## 队列
* [《java队列——queue详细分析》](https://www.cnblogs.com/lemon-flm/p/7877898.html)
	* 非阻塞队列：ConcurrentLinkedQueue(无界线程安全)，采用CAS机制（compareAndSwapObject原子操作）。
	* 阻塞队列：ArrayBlockingQueue(有界)、LinkedBlockingQueue（无界）、DelayQueue、PriorityBlockingQueue，采用锁机制；使用 ReentrantLock 锁。

* [《LinkedList、ConcurrentLinkedQueue、LinkedBlockingQueue对比分析》](https://www.cnblogs.com/mantu/p/5802393.html)

## 集合
* [《Java Set集合的详解》](https://blog.csdn.net/qq_33642117/article/details/52040345)

## 链表、数组
* [《Java集合详解--什么是List》](https://blog.csdn.net/wz249863091/article/details/52853360)

## 字典、关联数组
* [《Java map 详解 - 用法、遍历、排序、常用API等》](https://baike.xsoftlab.net/view/250.html)

## 栈
* [《java数据结构与算法之栈（Stack）设计与实现》](https://blog.csdn.net/javazejian/article/details/53362993)
* [《Java Stack 类》](http://www.runoob.com/java/java-stack-class.html)
* [《java stack的详细实现分析》](https://blog.csdn.net/f2006116/article/details/51375225)
	* Stack 是线程安全的。
	* 内部使用数组保存数据，不够时翻倍。

## 树

### 二叉树

每个节点最多有两个叶子节点。
*  [《二叉树》](https://blog.csdn.net/cai2016/article/details/52589952)

### 完全二叉树
* [《完全二叉树》](https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91/7773232?fr=aladdin)
	* 叶节点只能出现在最下层和次下层，并且最下面一层的结点都集中在该层最左边的若干位置的二叉树。

### 平衡二叉树
左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
* [《浅谈数据结构-平衡二叉树》](http://www.cnblogs.com/polly333/p/4798944.html)
* [《浅谈算法和数据结构: 八 平衡查找树之2-3树》](http://www.cnblogs.com/yangecnu/p/Introduce-2-3-Search-Tree.html)

### 二叉查找树（BST）
二叉查找树（Binary Search Tree），也称有序二叉树（ordered binary tree）,排序二叉树（sorted binary tree）。

* [《浅谈算法和数据结构: 七 二叉查找树》](http://www.cnblogs.com/yangecnu/p/Introduce-Binary-Search-Tree.html)


### 红黑树
* [《最容易懂得红黑树》](https://blog.csdn.net/sun_tttt/article/details/65445754)
	* 添加阶段后，左旋或者右旋从而再次达到平衡。
* [《浅谈算法和数据结构: 九 平衡查找树之红黑树》](http://www.cnblogs.com/yangecnu/p/Introduce-Red-Black-Tree.html)

### B-，B+，B*树
MySQL是基于B+树聚集索引组织表

* [《B-树，B+树，B\*树详解》](https://blog.csdn.net/aqzwss/article/details/53074186)
* [《B-树，B+树与B\*树的优缺点比较》](https://blog.csdn.net/bigtree_3721/article/details/73632405)
	* B+ 树的叶子节点链表结构相比于 B- 树便于扫库，和范围检索。
### LSM 树

LSM（Log-Structured Merge-Trees）和 B+ 树相比，是牺牲了部分读的性能来换取写的性能(通过批量写入)，实现读写之间的。
Hbase、LevelDB、Tair（Long DB）、nessDB 采用 LSM 树的结构。LSM可以快速建立索引。

* [《LSM树 VS B+树》](https://blog.csdn.net/dbanote/article/details/8897599)
	* B+ 树读性能好，但由于需要有序结构，当key比较分散时，磁盘寻道频繁，造成写性能。
	* LSM 是将一个大树拆分成N棵小树，先写到内存（无寻道问题，性能高），在内存中构建一颗有序小树（有序树），随着小树越来越大，内存的小树会flush到磁盘上。当读时，由于不知道数据在哪棵小树上，因此必须遍历（二分查找）所有的小树，但在每颗小树内部数据是有序的。

* [《LSM树（Log-Structured Merge Tree）存储引擎》](https://blog.csdn.net/u014774781/article/details/52105708)
	* 极端的说，基于LSM树实现的HBase的写性能比MySQL高了一个数量级，读性能低了一个数量级。
	* 优化方式：Bloom filter 替代二分查找；compact 小数位大树，提高查询性能。
	* Hbase 中，内存中达到一定阈值后，整体flush到磁盘上、形成一个文件（B+数），HDFS不支持update操作，所以Hbase做整体flush而不是merge update。flush到磁盘上的小树，定期会合并成一个大树。

## BitSet

经常用于大规模数据的排重检查。

* [《Java Bitset类》](http://www.runoob.com/java/java-bitset-class.html)
* [《Java BitSet（位集）》](https://blog.csdn.net/caiandyong/article/details/51581160)

-----------------------------

- [`算法`](core/algorithm)

# 算法

* [常用算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#常用算法)
	* [排序、查找算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#排序查找算法)
		* [选择排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#选择排序)
		* [冒泡排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#冒泡排序)
		* [插入排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#插入排序)
		* [快速排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#快速排序)
		* [归并排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#归并排序)
		* [希尔排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#希尔排序)
		* [堆排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#堆排序)
		* [计数排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#计数排序)
		* [桶排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#桶排序)
		* [基数排序](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#基数排序)
		* [二分查找](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#二分查找)
		* [Java 中的排序工具](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#java-中的排序工具)
	* [布隆过滤器](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#布隆过滤器)
	* [字符串比较](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#字符串比较)
		* [KMP 算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#kmp-算法)
	* [深度优先、广度优先](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#深度优先广度优先)
	* [贪心算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#贪心算法)
	* [回溯算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#回溯算法)
	* [剪枝算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#剪枝算法)
	* [动态规划](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#动态规划)
	* [朴素贝叶斯](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#朴素贝叶斯)
	* [推荐算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#推荐算法)
	* [最小生成树算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#最小生成树算法)
	* [最短路径算法](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#最短路径算法)

# 常用算法

* [《常见排序算法及对应的时间复杂度和空间复杂度》](https://blog.csdn.net/gane_cheng/article/details/52652705)

## 排序、查找算法

* [《常见排序算法及对应的时间复杂度和空间复杂度》](https://blog.csdn.net/gane_cheng/article/details/52652705)

### 选择排序
* [《Java中的经典算法之选择排序（SelectionSort）》](https://www.cnblogs.com/shen-hua/p/5424059.html)
	* 每一趟从待排序的记录中选出最小的元素，顺序放在已排好序的序列最后，直到全部记录排序完毕。

### 冒泡排序
* [《冒泡排序的2种写法》](https://blog.csdn.net/shuaizai88/article/details/73250615)
	* 相邻元素前后交换、把最大的排到最后。
	* 时间复杂度 O(n²)

### 插入排序
* [《排序算法总结之插入排序》](https://www.cnblogs.com/hapjin/p/5517667.html)

### 快速排序
* [《坐在马桶上看算法：快速排序》](http://developer.51cto.com/art/201403/430986.htm)
	* 一侧比另外一次都大或小。
### 归并排序
* [《图解排序算法(四)之归并排序》](http://www.cnblogs.com/chengxiao/p/6194356.html)
	* 分而治之，分成小份排序，在合并(重建一个新空间进行复制)。

### 希尔排序
TODO

### 堆排序
* [《图解排序算法(三)之堆排序》](https://www.cnblogs.com/chengxiao/p/6129630.html)
	* 排序过程就是构建最大堆的过程，最大堆：每个结点的值都大于或等于其左右孩子结点的值，堆顶元素是最大值。

### 计数排序
* [《计数排序和桶排序》](https://www.cnblogs.com/suvllian/p/5495780.html)
	* 和桶排序过程比较像，差别在于桶的数量。

### 桶排序
* [《【啊哈！算法】最快最简单的排序——桶排序》](http://blog.51cto.com/ahalei/1362789)
* [《排序算法（三）：计数排序与桶排序》](https://blog.csdn.net/sunjinshengli/article/details/70738527)
	* 桶排序将[0,1)区间划分为n个相同的大小的子区间，这些子区间被称为桶。
	* 每个桶单独进行排序，然后再遍历每个桶。

### 基数排序

按照个位、十位、百位、...依次来排。

* [《排序算法系列：基数排序》](https://blog.csdn.net/lemon_tree12138/article/details/51695211)
* [《基数排序》](https://www.cnblogs.com/skywang12345/p/3603669.html)


### 二分查找
* [《二分查找(java实现)》](https://www.cnblogs.com/coderising/p/5708632.html)
	* 要求待查找的序列有序。
	* 时间复杂度 O(logN)。

* [《java实现二分查找-两种方式》](https://blog.csdn.net/maoyuanming0806/article/details/78176957)
	* while + 递归。
### Java 中的排序工具
* [《Arrays.sort和Collections.sort实现原理解析》](https://blog.csdn.net/u011410529/article/details/56668545?locationnum=6&fps=1)
	* Collections.sort算法调用的是合并排序。
	* Arrays.sort() 采用了2种排序算法 -- 基本类型数据使用快速排序法，对象数组使用归并排序。

## 布隆过滤器

常用于大数据的排重，比如email，url 等。
核心原理：将每条数据通过计算产生一个指纹（一个字节或多个字节，但一定比原始数据要少很多），其中每一位都是通过随机计算获得，在将指纹映射到一个大的按位存储的空间中。注意：会有一定的错误率。
优点：空间和时间效率都很高。
缺点：随着存入的元素数量增加，误算率随之增加。

* [《布隆过滤器 -- 空间效率很高的数据结构》](https://segmentfault.com/a/1190000002729689)
* [《大量数据去重：Bitmap和布隆过滤器(Bloom Filter)》](https://blog.csdn.net/zdxiq000/article/details/57626464)
* [《基于Redis的布隆过滤器的实现》](https://blog.csdn.net/qq_30242609/article/details/71024458)
	* 基于 Redis 的 Bitmap 数据结构。
* [《网络爬虫：URL去重策略之布隆过滤器(BloomFilter)的使用》](https://blog.csdn.net/lemon_tree12138/article/details/47973715)
	* 使用Java中的 BitSet 类 和 加权和hash算法。

## 字符串比较

### KMP 算法
KMP：Knuth-Morris-Pratt算法（简称KMP）
核心原理是利用一个“部分匹配表”，跳过已经匹配过的元素。
* [《字符串匹配的KMP算法》](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)

## 深度优先、广度优先
* [《广度优先搜索BFS和深度优先搜索DFS》](https://www.cnblogs.com/0kk470/p/7555033.html)

## 贪心算法
* [《算法：贪婪算法基础》](https://www.cnblogs.com/MrSaver/p/8641971.html)
* [《常见算法及问题场景——贪心算法》](https://blog.csdn.net/a345017062/article/details/52443781)

## 回溯算法
* [《 五大常用算法之四：回溯法》](https://blog.csdn.net/qfikh/article/details/51960331)

## 剪枝算法
* [《α-β剪枝算法》](https://blog.csdn.net/luningcsdn/article/details/50930276)

## 动态规划
* [《详解动态规划——邹博讲动态规划》](https://www.cnblogs.com/little-YTMM/p/5372680.html)
* [《动态规划算法的个人理解》](https://blog.csdn.net/yao_zi_jie/article/details/54580283)

## 朴素贝叶斯

* [《带你搞懂朴素贝叶斯分类算法》](https://blog.csdn.net/amds123/article/details/70173402)
	* P(B|A)=P(A|B)P(B)/P(A)

* [《贝叶斯推断及其互联网应用1》](http://www.ruanyifeng.com/blog/2011/08/bayesian_inference_part_one.html)
* [《贝叶斯推断及其互联网应用2》](http://www.ruanyifeng.com/blog/2011/08/bayesian_inference_part_two.html)


## 推荐算法
* [《推荐算法综述》](http://www.infoq.com/cn/articles/recommendation-algorithm-overview-part01)
* [《TOP 10 开源的推荐系统简介》](https://www.oschina.net/news/51297/top-10-open-source-recommendation-systems)

## 最小生成树算法
* [《算法导论--最小生成树（Kruskal和Prim算法）》](https://blog.csdn.net/luoshixian099/article/details/51908175)

## 最短路径算法

* [《Dijkstra算法详解》](https://blog.csdn.net/qq_35644234/article/details/60870719)

-----------------------------

* [设计模式](#设计模式)
	* [设计模式的六大原则](#设计模式的六大原则)
	* [23种常见设计模式](#23种常见设计模式)
	* [应用场景](#应用场景)
	* [单例模式](#单例模式)
	* [责任链模式](#责任链模式)
	* [MVC](#mvc)
	* [IOC](#ioc)
	* [AOP](#aop)
	* [UML](#uml)
	* [微服务思想](#微服务思想)
		* [康威定律](#康威定律)

# 设计模式
## 设计模式的六大原则
* [《设计模式的六大原则》](https://blog.csdn.net/q291611265/article/details/48465113)
	* 开闭原则：对扩展开放,对修改关闭，多使用抽象类和接口。
	* 里氏替换原则：基类可以被子类替换，使用抽象类继承,不使用具体类继承。
	* 依赖倒转原则：要依赖于抽象,不要依赖于具体，针对接口编程,不针对实现编程。
	* 接口隔离原则：使用多个隔离的接口,比使用单个接口好，建立最小的接口。
	* 迪米特法则：一个软件实体应当尽可能少地与其他实体发生相互作用，通过中间类建立联系。
	* 合成复用原则：尽量使用合成/聚合,而不是使用继承。

## 23种常见设计模式
* [《设计模式》](http://www.runoob.com/design-pattern/design-pattern-tutorial.html)
* [《23种设计模式全解析》](https://www.cnblogs.com/susanws/p/5510229.html)

## 应用场景
* [《细数JDK里的设计模式》](http://blog.jobbole.com/62314/)
	* 结构型模式：
		* 适配器：用来把一个接口转化成另一个接口，如 java.util.Arrays#asList()。
		* 桥接模式：这个模式将抽象和抽象操作的实现进行了解耦，这样使得抽象和实现可以独立地变化，如JDBC；
		* 组合模式：使得客户端看来单个对象和对象的组合是同等的。换句话说，某个类型的方法同时也接受自身类型作为参数，如 Map.putAll，List.addAll、Set.addAll。
		* 装饰者模式：动态的给一个对象附加额外的功能，这也是子类的一种替代方式，如 java.util.Collections#checkedList|Map|Set|SortedSet|SortedMap。
		* 享元模式：使用缓存来加速大量小对象的访问时间，如 valueOf(int)。
		* 代理模式：代理模式是用一个简单的对象来代替一个复杂的或者创建耗时的对象，如 java.lang.reflect.Proxy

	* 创建模式:
		* 抽象工厂模式：抽象工厂模式提供了一个协议来生成一系列的相关或者独立的对象，而不用指定具体对象的类型，如 java.util.Calendar#getInstance()。
		* 建造模式(Builder)：定义了一个新的类来构建另一个类的实例，以简化复杂对象的创建，如：java.lang.StringBuilder#append()。
		* 工厂方法：就是 **一个返*** 回具体对象的方法，而不是多个，如 java.lang.Object#toString()、java.lang.Class#newInstance()。
		* 原型模式：使得类的实例能够生成自身的拷贝、如：java.lang.Object#clone()。
		* 单例模式：全局只有一个实例，如 java.lang.Runtime#getRuntime()。
	* 行为模式：
		* 责任链模式：通过把请求从一个对象传递到链条中下一个对象的方式，直到请求被处理完毕，以实现对象间的解耦。如 javax.servlet.Filter#doFilter()。
		* 命令模式：将操作封装到对象内，以便存储，传递和返回，如：java.lang.Runnable。
		* 解释器模式：定义了一个语言的语法，然后解析相应语法的语句，如，java.text.Format，java.text.Normalizer。
		* 迭代器模式：提供一个一致的方法来顺序访问集合中的对象，如 java.util.Iterator。
		* 中介者模式：通过使用一个中间对象来进行消息分发以及减少类之间的直接依赖，java.lang.reflect.Method#invoke()。
		* 空对象模式：如 java.util.Collections#emptyList()。
		* 观察者模式：它使得一个对象可以灵活的将消息发送给感兴趣的对象，如 java.util.EventListener。
		* 模板方法模式：让子类可以重写方法的一部分，而不是整个重写，如 java.util.Collections#sort()。

* [《Spring-涉及到的设计模式汇总》](https://www.cnblogs.com/hwaggLee/p/4510687.html)
* [《Mybatis使用的设计模式》](https://blog.csdn.net/u012387062/article/details/54719114)

## 单例模式
* [《单例模式的三种实现 以及各自的优缺点》](https://blog.csdn.net/YECrazy/article/details/79481964)
* [《单例模式－－反射－－防止序列化破坏单例模式》](https://www.cnblogs.com/ttylinux/p/6498822.html)
	* 使用枚举类型。

## 责任链模式
TODO

## MVC
* [《MVC 模式》](http://www.runoob.com/design-pattern/mvc-pattern.html)
	* 模型(model)－视图(view)－控制器(controller)

## IOC
* [《理解 IOC》](https://www.zhihu.com/question/23277575)
* [《IOC 的理解与解释》](https://www.cnblogs.com/NancyStartOnce/p/6813162.html)
	* 正向控制：传统通过new的方式。反向控制，通过容器注入对象。
	* 作用：用于模块解耦。
	* DI：Dependency Injection，即依赖注入，只关心资源使用，不关心资源来源。

## AOP

* [《轻松理解AOP(面向切面编程)》](https://my.oschina.net/yanquan345/blog/203415)
* [《Spring AOP详解》](https://www.cnblogs.com/hongwz/p/5764917.html)
* [《Spring AOP的实现原理》](http://www.importnew.com/24305.html)
	* Spring AOP使用的动态代理，主要有两种方式：JDK动态代理和CGLIB动态代理。
* [《Spring AOP 实现原理与 CGLIB 应用》](https://www.ibm.com/developerworks/cn/java/j-lo-springaopcglib/)
	* Spring AOP 框架对 AOP 代理类的处理原则是：如果目标对象的实现类实现了接口，Spring AOP 将会采用 JDK 动态代理来生成 AOP 代理类；如果目标对象的实现类没有实现接口，Spring AOP 将会采用 CGLIB 来生成 AOP 代理类


## UML

* [《UML教程》](https://www.w3cschool.cn/uml_tutorial/)

## 微服务思想
* [《微服务架构设计》](https://www.cnblogs.com/wintersun/p/6219259.html)
* [《微服务架构技术栈选型手册》](http://www.infoq.com/cn/articles/micro-service-technology-stack)

### 康威定律
* [《微服务架构的理论基础 - 康威定律》](https://yq.aliyun.com/articles/8611)
	* 定律一：组织沟通方式会通过系统设计表达出来，就是说架构的布局和组织结构会有相似。
	* 定律二：时间再多一件事情也不可能做的完美，但总有时间做完一件事情。一口气吃不成胖子，先搞定能搞定的。
	* 定律三：线型系统和线型组织架构间有潜在的异质同态特性。种瓜得瓜，做独立自治的子系统减少沟通成本。
	* 定律四：大的系统组织总是比小系统更倾向于分解。合久必分，分而治之。

* [《微服务架构核⼼20讲》](https://static.geekbang.org/PDF-%E4%BF%AE%E6%94%B9%E7%89%88-%E6%9E%81%E5%AE%A2%E6%97%B6%E9%97%B4-%E5%9B%BE%E7%89%87-%E6%9D%A8%E6%B3%A2-%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84.pdf)

--------------------

### 操作系统（operating system）

* [操作系统](#操作系统)
	* [计算机原理](#计算机原理)
	* [CPU](#cpu)
		* [多级缓存](#多级缓存)
	* [进程](#进程)

		[master进程和worker进程](https://www.cnblogs.com/hanshuai0921/p/7411497.html)

	* [线程](#线程)
	* [协程](#协程)
	* [Linux](#linux)

    # 操作系统
	[TOC]

#### 计算机原理

* [《操作系统基础知识——操作系统的原理，类型和结构》](https://segmentfault.com/a/1190000003692840)

#### CPU

##### 多级缓存
典型的 CPU 有三级缓存，距离核心越近，速度越快，空间越小。L1 一般 32k，L2 一般 256k，L3 一般12M。内存速度需要200个 CPU 周期，CPU 缓存需要1个CPU周期。

* [《从Java视角理解CPU缓存和伪共享》](https://blog.csdn.net/zero__007/article/details/54089730)

#### 进程

TODO

#### 线程

* [《线程的生命周期及状态转换详解》](https://blog.csdn.net/asdf_1024/article/details/78978437)

#### 协程

* [《终结python协程----从yield到actor模型的实现》](https://www.thinksaas.cn/group/topic/839375/)
	* 线程的调度是由操作系统负责，协程调度是程序自行负责
	* 与线程相比，协程减少了无谓的操作系统切换.
	* 实际上当遇到IO操作时做切换才更有意义，（因为IO操作不用占用CPU），如果没遇到IO操作，按照时间片切换.

#### Linux

* [《Linux 命令大全》](http://www.runoob.com/linux/linux-command-manual.html)