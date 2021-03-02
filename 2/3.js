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
            ListDelete (*L, i, *e ) : 删除线性表 L 中第 i 位置元素, 并且 e 返回其值.
            ListLength ( L ) : 返回线性表 L 的元素个数.
        endADT

    3.4 线性表的顺序存储结构
        3.4.1 顺序存储定义
            线性表的顺序存储结构, 指的是用一段地址连续的存储单元依次存储线性表的数据元素.

        3.4.2 顺序存储方式
            线性表的顺序存储结构, 就是在内存中找了块地儿, 通过占位的形式, 把一定内存空间给占了, 然后把相同数据类型的数据元素依次存放在这块空地中.
            既然线性表的每个数据元素的类型都相同, 所以可以用 C 语言(其他语言也相同)的一维数组来实现顺序存储结构,
            即把第一个数据元素存到数组下标 0 的位置中, 接着把线性表相邻的元素存储在数组中相邻的位置.

            描述顺序存储结构需要三个属性:
                存储空间的起始位置: 数组 data, 它的存储位置就是存储空间的存储位置.
                线性表的最大存储容量: 数组长度 MaxSize.
                线性表的当前长度: length.

        3.4.3 数据长度与线性表长度区别
            数组的长度是存放线性表的存储空间长度, 存储分配后这个量一般是不变的.
            线性表的长度是线性表中数据元素的个数, 随着线性表插入和删除操作的进行, 这个量是变化的.
            在任意时刻, 线性表的长度应该小于等于数组的长度.

        3.4.4 地址计算方法
            存储器中的每个存储单元都有自己的编号, 这个编号称为地址.

            由于每个数据元素, 不管它是整型, 实型还是字符型, 它都是需要占用一定的存储单元空间的.
            假设占用的是 c 个存储单元, 那么线性表中第 i + 1 个数据元素的存储位置和第 i 个数据元素的存储位置满足下列关系(LOC 表示获得存储位置的函数).
            LOC(a(i+1)) = LOC(a(i)) + c
            所以对于第 i 个数据元素 ai 的存储位置可以由 a1 推送得出:
            LOC(a(i)) = LOC(a(1)) + (i - 1) * c

            通过这个公式, 你可以随时算出线性表中任意位置的地址, 不管它是第一个还是最后一个, 都是相同的时间.
            那么我们对每个线性表位置的存入或者取出数据, 对于计算机来说都是相等的时间, 也就是一个常数, 它的存取时间性能为 O(1).
            我们通常把具有这一特点的存储结构称为随机存取结构.
        
 */