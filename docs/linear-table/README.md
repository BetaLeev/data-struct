# 第二章 线性表

## 2.1 线性表的基本概念
线性表(lineartable) 是一种线性结构，它是由n(n大于等于0)个数据元素组成的有穷序列，数据元素又称结点。结点个数n称为表长。当n=0时，线性表不含任何数据元素，称为空表。

基本特征：线性表中结点具有一对一的关系，如果结点数不为零，则除起始结点没有直接前驱外，其他每个结点有且仅有一个直接前驱；除终端结点没有直接后继外，其他每个结点有且仅有一个直接后继。

线性表中，每个数据元素的含义，在不同的应用中各不相同，但同一个线性表中的所有结点代表的数据元素具有相同的特征。如每个结点表示一个数，或者一名学生的信息，也可以表示更为复杂的信息。


## 2.2 线性表的顺序存储
顺序存储是最简单的一种存储方式，

### 2.2.1 线性表顺序存储的类型定义
线性表顺序饥存储的方法是：将表中的结点依次存放在计算机内存中一组连续的存储单元中，数据元素在线性表中的临接关系决定它们在存储空间中的存储位置，即逻辑结构中想你的结点其存储位置也相邻。用顺序存储实现的线性表称为顺序表。一般使用数组来表示顺序表。


### 2.2.2 线性表的基本运算在顺序表上的实现
本节给出线性表的基本运算在顺序表上的实现。顺序表的“第i个数据元素”存放在数组下表为“i-1”的位置。
 1. 插入
 顺序表的插入运算InsertSeqlist （SeqList L , DataType x, int i）是指在顺序表的第
 i(i <= i <= n+1)个元素之前，插入一个新元素x。使长度为n的线性表(a1,a2,……)变为长度为n+1的线性表(a,a2……,x,ai,an)
 2. 删除
 删除运算 DeleteSeqlist(SeqList L ,init i)是指将线性表的第 i(1<=i<=n) 个数据元素剔去，使长度为n的线性表(a1,a2……)变为长度为n-1的线性表(a1,a2……)
3. 定位
定位运算LocalteSeqlist(SeqList L , DataType x)的功能是查找除线性表L中值等于x的结点序号的最小值，当找不到值为x的结点时，返回结果0。下列算法从左往右扫描顺序表中的元素，考察元素的值是否等于x

### 2.2.3 顺序表实现算法的分析
从算法的实现中可以看出，在线性表的基本操作中，最频繁的操作是数据元素的比较和移动。因此我们在分析线性表的顺序表实现算法时，一个重要指标就是数据元素的比较和移动的次数。
设表的长度length=n，在插入算法中，元素的移动次数不仅与顺序表的长度n有关，还与插入的位置i有关。
当插入位置i=n+1时，需要比较和移动元素当次数为0；当i=1时，需要比较和移动元素当次数为n。由此可见，插入算法在最坏情况下，其时间复杂度为o(n),一般情况下元素比较和移动的次数为n-i+1次，对于i=1，2，n+1这n+1种不同的情况，计算元素的移动次数，可以得出插入算法的平均移动次数约为n/2，其时间复杂度为o(n)
通过以上分析易知，在顺序表上做插入运算平均要移动表中一半的结点，当n很大时，算法当效率较低。 

## 2.3 线性表的链接存储
线性表的链接存储是指它的存储结构是链式的。线性表常见的链式存储结构有 单链表、循环链表和双向循环链表，其中最简单的是单链表。

### 2.3.1 单链表的类型定义
所有结点通过指针链接形成链表 link list
struct node 表示链表的结点，结点包含两个域：数据域(data)和指针域(next)。
数据域的类型为DataType，指针域存放该结点的直接后继结点的地址，类型为指向struct node的指针。

### 2.3.2 线性表的基本运算在单链表上的实现
1. 初始化
在算法中，变量head是链表的头指针，它指向新创建的结点，即头结点。
一个空单链表仅有一个头结点，它的指针域称为NULL

2. 求表长
在单链表存储结构中，线性表的表长等于单链表中数据元素的结点个数，即除了头结点意外的结点的个数。
通常通过一个头指针head来访问一个单链表，单链表的结点通过指针域来维持与直接后继的关系。
因此，只能通过结点的指针域来从头至尾访问每一个结点。求表长的算法也是来源于这个思路。

3. 读表元素
通常给定一个序号i，查找线性表的第i个元素。
在链表中，任何相邻的两个结点通过一个指针相连，一个结点的位置包含在直接前驱结点的next域中。
所以，必须从头指针出发，一直向后移动，直到第i个结点。这和求长算法相似。

4. 定位
线性表的定位运算，就是给定表元素的值，找出这个元素的位置。在单链表的实现中，则是给定一个结点的值，找出这个结点是单链表的第几个结点。定位运算又称作按值查找。
在定位运算中，也需要从头至尾访问链表，直至找到需要的结点，返回其序号，若未找到，返回0。

5. 插入
单链表的插入运算是将给定值为x的元素插入到链表head的第i个结点之前，要实现这个算法，先找到链表的第i-1个结点q，然后，生成一个值为x的新结点p，p的指针域指向q的直接后继结点，q的指针域指向p，这样即完成单链表的插入运算。

6. 删除
删除运算是给定一个值i，将链表中第i个结点从链表中移出，并修改相关结点的指针域，以维持剩余结点的链接关系。

## 2.4 其他运算在单链表上的实现

### 2.4.1 建表

### 2.4.2 删除重复结点

## 2.5 其他链表

### 2.5.1 循环链表

### 2.5.2 双向循环链表
1. 删除
2. 插入

## 2.6 顺序实现与链接实现的比较