/**
    3. 线性表

    3.2 线性表的定义
        线性表 (List): 零个或多个数据元素的有限序列.

        首先它是一个序列.
        也就是说, 元素之间是有顺序的, 若元素存在多个, 则第一个元素无先驱, 最后一个元素无后继, 其他每个元素都有且只有一个先驱和后继.

        所以线性表元素的个数 n (n >= 0) 定义为线性表的长度, 当 n = 0 时, 称为空表.

        在非空表中的每个元素都有一个确定的位置, 如 a1 是第一个元素, an 是最后一个元素, ai 是第 i 个数据元素, 称 i 为数据元素 ai 在线性表中的位序.

        星座列表
        白羊 -> 金牛 -> 双子 -> 巨蟹 -> 狮子 -> 处女 -> 天秤 -> 射手 -> 摩羯 -> 水瓶 -> 双鱼

        班级同学的点名册
        学号 | 姓名 | 性别 | 出生年月 | 家庭地址
          1  | 张三 |  男  |  1995.3  | 东街西巷1号203室
          2  | 李四 |  女  |  1994.8  | 北路4弄5号6室
          3  | 王五 |  女  |  1994.2  | 南大道789号
          .  | .... |  ..  |  ......  | ............
        这个点名册中, 每一个元素除学生的学号外, 还可以有同学的姓名, 性别, 出生年月什么的, 这其实就是我们之前讲的数据项.
        在复杂的线性表中, 一个数据元素可以由若干个数据项组成.

    3.3 线性表的抽象数据类型
        线性表的抽象数据类型定义如下:
        ADT 线性表 (List)
        Data
            线性表的数据对象集合为 { a1, a2, ..., an}, 每个元素的类型均为DataType.
            其中, 除第一个元素 a1 外, 每一个元素有且只有一个直接前驱元素, 除了最后一个元素 an 外, 每一个元素有且只有一个直接后继元素.
            数据元素之间的关系是一对一的关系.
        Operation
            InitList ( *L ) : 初始化操作, 建立一个空的线性表L.
            ListEmpty ( L ) : 若线性表为空, 返回 true, 否则返回 false.
            ClearList ( *L ) : 将线性表清空.
            GetElem ( L, i, *e ) : 将线性表 L 中的第 i 个元素值返回给 e.
            LocateElem ( L, e ) : 在线性表 L 中查找与给定 e 相等的元素, 如果查找成功, 返回该元素在表中序号表示成功; 否则返回 0 表示失败.
            ListInsert ( *L, i, e) : 在线性表 L 中的第 i 个位置插入新元素 e.
            ListDelete ( *L, i, *e ) : 删除线性表 L 中第 i 位置元素, 并且 e 返回其值.
            ListLength ( L ) : 返回线性表 L 的元素个数.
        endADT

    3.4 线性表的顺序存储结构
        3.4.1 顺序存储定义
            线性表的顺序存储结构, 指的是用一段地址连续的存储单元依次存储线性表的数据元素.

        3.4.2 顺序存储方式
            线性表的顺序存储结构, 就是在内存中找了块地儿, 通过占位的形式, 把一定内存空间给占了, 然后把相同数据类型的数据元素依次存放在这块空地中.
            既然线性表的每个数据元素的类型都相同, 所以可以用 C 语言(其他语言也相同)的一维数组来实现顺序存储结构,
            即把第一个数据元素存到数组下标 0 的位置中, 接着把线性表相邻的元素存储在数组中相邻的位置.

            线性表的顺序存储的结构代码.
            #define MAXSIZE 20 // 存储空间初始分配量
            typeof int ElemType; // ElemType 类型根据实际情况而定, 这里假设为 int
            typeof struct
            {
                ElemType data[MAXSIZE]; // 数组存储数据元素, 最大值为 MAXSIZE
                int length; // 线性表当前长度
            }SqList;

            描述顺序存储结构需要三个属性:
                存储空间的起始位置: 数组 data, 它的存储位置就是存储空间的存储位置.
                线性表的最大存储容量: 数组长度 MaxSize.
                线性表的当前长度: length.

        3.4.3 数据长度与线性表长度区别
            数组的长度是存放线性表的存储空间长度, 存储分配后这个量一般是不变的.
            线性表的长度是线性表中数据元素的个数, 随着线性表插入和删除操作的进行, 这个量是变化的.
            在任意时刻, 线性表的长度应该小于等于数组的长度.

        3.4.4 地址计算方法
            由于我们数数都是从 1 开始数的, 线性表的定义也不能免俗, 起始也是 1.
            存储器中的每个存储单元都有自己的编号, 这个编号称为地址.

            由于每个数据元素, 不管它是整型, 实型还是字符型, 它都是需要占用一定的存储单元空间的.
            假设占用的是 c 个存储单元, 那么线性表中第 i + 1 个数据元素的存储位置和第 i 个数据元素的存储位置满足下列关系(LOC 表示获得存储位置的函数).
            LOC(ai+1) = LOC(ai) + c (i+1 为脚标)
            所以对于第 i 个数据元素 ai 的存储位置可以由 a1 推送得出:
            LOC(ai) = LOC(a1) + (i - 1) * c

            通过这个公式, 你可以随时算出线性表中任意位置的地址, 不管它是第一个还是最后一个, 都是相同的时间.
            那么我们对每个线性表位置的存入或者取出数据, 对于计算机来说都是相等的时间, 也就是一个常数, 它的存取时间性能为 O(1).
            我们通常把具有这一特点的存储结构称为随机存取结构.

    3.5 顺序存储结构的插入与删除
        3.5.1 获得元素操作
            #define OK 1
            #define ERROR 0
            #define TRUE 1
            #define FALSE 0
            typeof int Status; // Status 是函数的类型, 其值是函数结果状态代码, 如 OK 等
            初始条件: 顺序线性表已存在, 1 <= i <= ListLength(L)
            操作结果: 用 e 返回 L 中第 i 个数据元素的值
            Status GetElem(SqList L, int i, ElemType *e)
            {
                if (L.length == 0 || i < 1 || i > L.length) {
                    return ERROR;
                }
                *e = L.data[i - 1];
                return OK;
            }

            js模拟
            function GetElem(L, i, e) {
                if (L.length == 0 || i < 1 || i > L.length) {
                    return 'error'
                }
                e = L[i - 1]
                return e
            }

        3.5.2 插入操作
            插入算法的思路:
                如果插入位置不合理, 抛出异常;
                如果线性表长度大于等于数组长度, 则抛出异常或动态增加容量;
                从最后一个元素开始向前遍历到第 i 个位置, 分别将它们都向后移动一个位置;
                将要插入元素填入位置 i 处;
                表长加 1.

            初始条件: 顺序线性表已存在, 1 <= i <= ListLength(L)
            操作结果: 在 L 中第 i 个位置之前插入新的数据元素e, L 的长度加 1
            Status ListInsert(SqList *L, int i, ElemType e)
            {
                int k;
                if (L.length == MAXSIZE) // 顺序线性表已经满
                    return ERROR;
                if (i < 1 || i > L.length + 1) // 当 i 不在范围内时
                    return ERROR;
                if (i <= L.length) { // 若插入的数据位置不在表尾
                    for (k = L->length-1; k >= i - 1; k--) // 将插入位置后数据元素向后移动一位
                        L->data[k + 1] = L->data[k]
                }
                L->data[i - 1] = e; // 将新元素插入
                L->length++;
                return OK;
            }

            js模拟
            function ListInsert(L, i, e) { // MAXSIZE: 线性表的最大长度
                if (L.length == MAXSIZE) { // 顺序线性表已经满
                    return 'error'
                }
                if (i < 1 || i > L.length + 1) { // 当 i 不在范围内时
                    return 'error'
                }
                if (i <= L.length) { // 若插入的数据位置不在表尾
                    for (let k = L.length - 1; k >= i - 1; k--) {
                        L[k + 1] = L[k] // 将插入位置后数据元素向后移动一位
                    }
                }
                L[i - 1] = e // 将新元素插入
                return 'ok'
            }

        3.5.3 删除操作
            删除算法的思路:
                如果删除位置不合理, 抛出异常;
                去除删除元素;
                从删除元素位置开始遍历到最后一个元素位置, 分别将它们都向前移动一个位置;
                表长减 1.

            初始条件: 顺序线性表已存在, 1 <= i <= ListLength(L)
            操作结果: 删除 L 的第 i 个数据元素, 并用 e 返回其值, L 的长度减 1
            Status ListDelete(SqList *L, int i, ElemType *e)
            {
                int k;
                if (L->length == 0) // 线性表为空
                    return ERROR;
                if (i < 1 || i > L->length) { // 删除位置不正确
                    return ERROR;
                }
                *e = L->data[i - 1];
                if (i < L->length) // 如果删除不是最后的位置
                {
                    for (k = i; k < L->length; k++) // 将删除位置后继元素前移
                        L->data[k - 1] = L->data[k]
                }
                L->length--;
                return OK;
            }

            js模拟
            function ListDelete(L, i, e) {
                if (L.length == 0) { // 线性表为空
                    return 'error'
                }
                if (i < 1 || i > L.length) { // 删除位置不正确
                    return 'error'
                }
                e = L[i - 1]
                if (i < L.length) { // 如果删除不是最后的位置
                    for (let k = i; k < L.length; k++) {
                        L[k - 1] = L[k] // 将删除位置后继元素前移
                    }
                }
                return 'ok'
            }

        3.5.4 线性表顺序存储结构的优缺点
            优点
            无须为表示表中元素之间的逻辑关系而增加额外的存储空间
            可以快速地存取表中任一位置的元素

            缺点
            插入和删除操作需要移动大量元素
            当线性表长度变化较大时, 难以确定存储空间的容量
            造成存储空间的 "碎片"

    3.6 线性表的链式存储结构
        3.6.1 顺序存储结构不足的解决办法

        3.6.2 线性表链式存储结构定义
            为了表示每个数据元素 a1 与其直接后继数据元素 ai+1 (i+1 为脚标) 之间的逻辑关系, 对数据元素 a1 来说, 除了存储其本身的信息之外,
            还需存储一个指示其直接后继的信息 (即直接后继的存储位置). 我们把存储数据元素信息的域称为数据域, 把存储直接后继位置的域称为指针域.
            指针域中存储的信息称做指针或链.这两部分信息组成数据元素 ai 的存储映像, 称为结点 (Node).
            n 个结点 (ai 的存储映像) 链结成一个链表, 即为线性表 (a1, a2, ..., an) 的链式存储结构, 因为此链表的每个结点中只包含一个指针域, 所以叫做单链表.

            链表中第一个结点的存储位置叫做头指针.

            单链表的第一个结点前附设一个结点, 称为头结点.

        3.6.3 头指针与头结点的异同
            头指针
            头指针是指链表指向第一个结点的指针, 若链表有头结点, 则是指向头结点的指针
            头指针具有标识作用, 所以常用头指针冠以链表的名字
            无论链表是否为空, 头指针均不为空. 头指针是链表的必要元素

            头结点
            头结点是为了操作的统一和方便而设立的, 放在第一个元素的结点之前, 其数据域一般无意义 (也可存放链表的长度)
            有了头结点, 对在第一元素结点前插入结点和删除第一结点, 其操作与其它结点的操作就统一了
            头结点不一定是链表必须要素

        3.6.4 线性表链式存储结构代码描述
            单链表中, 我们在 C 语言中可用结构指针来描述.

            线性表的单链表存储结构
            typeof struct Node
            {
                ElemType data;
                struct Node *next;
            } Node;
            typeof struct Node *LinkList; // 定义 LinkList

            结点由存放数据元素的数据域存放后继结点地址的指针域组成.

    3.7 单链表的读取
        获取链表第 i 个数据的算法思路:
        1. 声明一个结点 p 指向链表第一个结点, 初始化 j 从 1 开始;
        2. 当 i < j 时, 就遍历链表, 让 p 的指针向后移动, 不断指向下一结点, j 累加 1;
        3. 若到链表末尾 p 为空, 则说明第 i 个元素不存在;
        4. 否则查找成功, 返回结点 p 的数据.

        初始条件: 顺序线性表已存在, 1 <= i <= ListLength(L)
        操作结果: 用 e 返回 L 中第 i 个数据元素的值
        Status GetElem(LinkList L, int i, ElemType *e)
        {
            int j;
            LinkList p; // 声明一结点p
            p = L->next; // 让 p 指向链表 L 的第一个结点
            j = 1; // j 为计数器
            while (p && j < i) // p 不为空或者计数器 j 还没有等于 i 是, 循环继续
            {
                p = p->next // 让 p 指向下一个结点
                ++j;
            }
            if ( !p || j > i )
                return ERROR; // 第 i 个元素不存在
            *e = p->data; // 取第 i 个元素的数据
            return OK;
        }

    3.8 单链表的插入与删除
        3.8.1 单链表的插入
            单链表第 i 个数据插入结点的算法思路:
            1. 声明一结点 p 指向链表第一个结点, 初始化 j 从 1 开始;
            2. 当 j < i 时, 就遍历链表, 让 p 的指针向后移动, 不断指向下一个结点, j 累加 1;
            3. 若到链表末尾 p 为空, 则说明第 i 个元素不存在;
            4. 否则查找成功, 在系统中生成一个空结点 s;
            5. 将数据元素 e 赋值给 s->data;
            6. 单链表的插入标准语句 s->next = p->next; p->next = s;
            7. 返回成功.

            初始条件: 顺序线性表已存在, 1 <= i <= ListLength(L)
            操作结果: 在 L 中第 i 个位置之前插入新的数据元素e, L 的长度加 1
            Status ListInsert(LinkList *L, int i, ElemType e)
            {
                int j;
                LinkList p, s;
                p = *L;
                j = 1;
                while (p && j < i) // 寻找第 i 个结点
                {
                    p = p->next;
                    ++j;
                }
                if (!p || j > i)
                    return ERROR; // 第 i 个元素不存在
                s = (LinkList)malloc(sizeof(Node)); // 生成新结点(C 标准函数)
                s->data = e;
                s->next = p->next; // 将 p 的后继结点赋值给 s 的后继
                p->next = s; // 将 s 赋值给 p 的后继
                return OK;
            }

        3.8.2 单链表的删除
            单链表第 i 个数据删除结点的算法思路:
            1. 声明一结点 p 指向链表第一个结点, 初始化 j 从 1 开始;
            2. 当 j < i 时, 就遍历链表, 让 p 的指针向后移动, 不断指向下一个结点, j 累加 1;
            3. 若到链表末尾 p 为空, 则说明第 i 个元素不存在;
            4. 否则查找成功, 将欲删除的结点 p->next 赋值给 q;
            5. 单链表的删除标准语句 p->next = q->next;
            6. 将 q 结点中的数据赋值给 e, 作为返回;
            7. 释放 q 结点;
            8. 返回成功;

            初始条件: 顺序线性表已存在, 1 <= i <= ListLength(L)
            操作结果: 删除 L 的第 i 个数据元素, 并用 e 返回其值, L 的长度减 1
            Status ListDelete(LinkList *L, int i, ElemType *e)
            {
                int j;
                LinkList p, q;
                p = *L;
                j = 1;
                while (p->next && j < i) // 遍历寻找第 i 个元素
                {
                    p = p->next;
                    ++j;
                }
                if (!(p->next) || j > i)
                    return ERROR; // 第 i 个元素不存在
                q = p->next;
                p->next = q->next; // 将 q 的后继赋值给 p 的后继
                *e = q->data; // 将 q 结点中的数据给 e
                free(q); // 让系统回收此结点, 释放内存
                return OK;
            }

            对于插入或删除数据越频繁的操作, 单链表的效率优势就越是明显.

    3.9 单链表的整表创建
        单链表整表创建的算法思路:
        1. 声明一结点 p 和计数器变量 i;
        2. 初始化一空链表 L;
        3. 让 L 的头结点的指针指向 NULL, 即建立一个带头结点的单链表;
        4. 循环:
            生成一新结点赋值给 p;
            随机生成一数字赋值给 p 的数据域 p->data;
            将 p 插入到头结点与前一新结点之间.

        随机产生 n 个元素的值, 建立带表头结点的单链线性表 L (头插法)
        void CreateListHead(LinkList *L, int n)
        {
            LinkList p;
            int i;
            srand(time(0)); // 初始化随机数种子
            *L = (LinkList)malloc(sizeof(Node));
            (*L)->next = NULL; // 先建立一个带头结点的单链表
            for (i = 0; i < n; i++)
            {
                p = (LinkList)malloc(sizeof(Node)); // 生成新结点
                p->data = rand()%100+1; // 随机生成 100 以内的数字
                p->next = (*L)->next
                (*L)->next = p; // 插入到表头
            }
        }

        随机产生 n 个元素的值, 建立带表头结点的单链线性表 L (尾插法)
        void CreateListHead(LinkList *L, int n)
        {
            LinkList p, r;
            int i;
            srand(time(0)); // 初始化随机数种子
            *L = (LinkList)malloc(sizeof(Node)); // 为整个线性表
            r = *L; // r 为指向尾部的结点
            for (i = 0; i < n; i++)
            {
                p = (Node *)malloc(sizeof(Node)); // 生成新结点
                p->data = rand()%100+1; // 随机生成 100 以内的数字
                r->next = p; // 将表尾终端结点的指针指向新结点
                r = p; //将当前的新结点定义为表尾终端结点
            }
            r->next = NULL; // 表示当前链表结束
        }

    3.10 单链表的整表删除
        单链表整表删除的算法思路如下:
        1. 声明一结点 p 和 q;
        2. 将第一个结点赋值给 p;
        3. 循环:
            将下一结点赋值给 q;
            释放 p;
            将 q 赋值给 p.

        初始条件: 顺序线性表 L 已存在, 操作结果: 将 L 重置为空表
        Status ClearList(LinkList *L)
        {
            LinkList p, q;
            p = (*L)->next; // p 指向第一个结点
            while (p)
            {
                q = p->next;
                free(p);
                p = q;
            }
            (*L)->next = NULL; // 头结点指针成为空
            return OK;
        }

    3.11 单链表结构与顺序存储结构优缺点
        存储分配方式
            顺序存储结构用一段连续的存储单元依次存储线性表的数据元素
            单链表采用链式存储结构, 用一组任意的存储单元存放线性表的元素

        时间性能
            查找
                顺序存储结构 O(1)
                单链表 O(n)
            插入和删除
                顺序存储结构需要平均移动表长一半得元素, 时长为 O(n)
                单链表在找出某位置的指针后, 插入和删除时间仅为 O(1)

        空间性能
            顺序存储结构需要预分配存储空间, 分大了, 浪费, 分小了易发生上溢
            单链表不需要分配存储空间, 只要有就可以分配, 元素个数也不受限制

    3.12 静态链表
        用数组来代替指针, 来描述单链表.
 */