---
title: PostgreSQL DBA指南
date: 2021-01-25 18：41：59
tags: [计算机, 数据库]
---

这篇指南的意图是给你一些关于DBA前景的想法，并且在疑惑的时候帮助你学习。图谱或多或少带有个人主张。成为一个DBA要了解图谱所列的全部内容，而不是图谱罗列内容的顺序逐一了解。

###### 了解RDBMS的基本术语和概念
基本了解Postgres关键术语和RDBMS概念。

- **对象模型**：数据类型，列，行，表，方案，数据库，查询。
- **关系模型**：域，属性，维度关系约束，NULL。
- **数据库高级概念**： ACID，MVCC，会话，写日志查询处理。
- **链接**： 
&nbsp;&nbsp;※  [Postgres Glossary](https://www.postgresql.org/docs/13/glossary.html)
&nbsp;&nbsp;※  SQL和关系理论 - Christopher J. Date，2009
&nbsp;&nbsp;※  数据库设计和关系理论 - Christopher J. Date，2012

###### 了解安装和运行PostgreSQL
通过获取安装和运行Postgres的实际技能以备接下来的工作环境下学习。
- 使用包管理器 （APT，YUM，etc.）
- 使用`docker`。
- 使用`systemd` （start，stop，restart，reload）管理Postgres服务。
- 使用`pg_ctl`，或者操作系统指定工具(像`pg_ctlcluster`)管理Postgres服务。
- 使用`psql`连接Postgres。
- 在云环境部署数据库服务（AWS，GCE，Azure，Heroku，DigitalOcean，等等...）.
- **链接**：
&nbsp;&nbsp;※ [官网下载和安装指令](https://www.postgresql.org/download/)
&nbsp;&nbsp;※ [官网Docker镜像](https://hub.docker.com/_/postgres)

###### 了解SQL概念
获取如何创建和操作数据库对象得使用技能并且使用`psql`客户端执行查询。

- 理解基本数据类型。
- **DML查询**：查询数据，修改数据，筛选数据，多表联合。
&nbsp;&nbsp;※ 高级主题：会话，CTE，子查询，横向联表，分组，set操作。
- **DDL查询**：管理表和方案（创建，修改，删除）。
- 使用`COPY`导入和导出数据。
- **链接**：
&nbsp;&nbsp;※ [DB Fiddle](https://www.db-fiddle.com/)
&nbsp;&nbsp;※ [PostgreSQL教程](https://www.postgresqltutorial.com/)
&nbsp;&nbsp;※ [开始使用PostgreSQL SQL](https://www.postgresql.org/docs/current/tutorial-sql.html)
&nbsp;&nbsp;※ [SQL语言](https://www.postgresql.org/docs/current/sql.html)

###### 了解配置Postgres
掌握好Postgres可以如何配置是核心，深入理解Postgres内部核心在这里还不是时候。

- **postgresql.conf**：
&nbsp;&nbsp;※ 资源使用
&nbsp;&nbsp;※ 预写日志
&nbsp;&nbsp;※ 检查点和后台编写器
&nbsp;&nbsp;※ 基于成本的真空和自动真空
&nbsp;&nbsp;※ 复写
&nbsp;&nbsp;※ 查询计划器
&nbsp;&nbsp;※ 报告，记录，分析
&nbsp;&nbsp;※ 添加额外扩展
&nbsp;&nbsp;※ ...继续探索其他配置选项
- **链接**：
&nbsp;&nbsp;※ [postgresqlco.nf](http://postgresqlco.nf/)

###### 了解Postgres安全概念
掌握基本得安全概念和部署安全配置的通用方法。

- 授权模型，角色，**pg_hba.conf**，SSL设置。
- **对象权限**：授予/撤销，默认权限。
- **高级主题** - 行级安全，selinux。
- **链接**：
&nbsp;&nbsp;※ [客户端授权](https：//www.postgresql.org/docs/current/client-authentication.html)
&nbsp;&nbsp;※ [角色和用户管理](https：//www.postgresql.org/docs/current/user-manag.html)

###### 培养DBA基础技能
掌握如何部署，扩展，维护，安装Postgres，以及第三方Postgres生态系统软件。

- **复制**：流复制，逻辑复制
- **备份/恢复工具**：
&nbsp;&nbsp;※ 内置：`pg_dump，pg_dumpall，pg_restore，pg_basebackup`
&nbsp;&nbsp;※ 第三方：`barman，pgbackrest，pg_probackup，WAL-G`
&nbsp;&nbsp;※ 备份验证程序
- **升级程序**
&nbsp;&nbsp;※ 主要使用`pg_upgrade`
&nbsp;&nbsp;※ 升级使用逻辑复制
- **连接池**
&nbsp;&nbsp;※ `Pgbouncer`
&nbsp;&nbsp;※ 其他：`Pgpool-II，Odyssey，Pgagroal`
- **基础设施监控**：`Prometheus，Zabbix`，其他喜欢的监控解决方案
- **高可用性和集群管理工具**
&nbsp;&nbsp;※ `Patroni`
&nbsp;&nbsp;※ **其他**：`Repmgr，Stolon，pg_auto_failover，PAF`
- **应用负载均衡和服务发掘**：`Haproxy，Keepalived，Consul，Etcd`
- **在`Kubernetes`上部署Postgres**：Simple `StatefulSet` setup，`HELM`，operators
- 资源使用和配置，容量规划

###### 了解如何使例程自动化
获得实用技能，学习自动化工具并使现有例行任务自动化。

- 自动使用shell脚本或者其他喜欢的语言（`Bash，Python，Perl`，etc）
- 配置管理：`Ansible，Salt，Chef，Puppet`

###### 培养开发应用程序DBA技能
学习理论并获得应用程序应如何与Postgres一起使用的实践技能。

- **迁移**：
&nbsp;&nbsp;※ 实用模式和反模式
&nbsp;&nbsp;※ 工具：`liquibase，sqitch`，特定语言的工具
- 数据导入/导出，批量装载和处理
- **队列**：
&nbsp;&nbsp;※ 实用模式和反模式
&nbsp;&nbsp;※ `Skytools PGQ`
- 数据分区和分片模式。
- 数据库规范化和规范形式。
- 书籍：
&nbsp;&nbsp;※ The Art of PostgreSQL - Dimitri Fontaine，2020

###### 学习Postgres高级主题
这对于不断扩展和发展有关Postgres的现有知识很重要。

- **底层内部**：
&nbsp;&nbsp;※ 进程和内存架构
&nbsp;&nbsp;※ 真空处理
&nbsp;&nbsp;※ 缓冲区管理
&nbsp;&nbsp;※ 锁管理
&nbsp;&nbsp;※ 物理存储和文件布局
&nbsp;&nbsp;※ 系统目录
- **细粒度调试**：
&nbsp;&nbsp;※ 单用户，单数据库设置
&nbsp;&nbsp;※ 储存参数
&nbsp;&nbsp;※ 与工作量有关的调整： OLTP，OLAP，HTAP
- **高级SQL主题**：
&nbsp;&nbsp;※ PL/pgSQL，存储过程和函数，触发器
&nbsp;&nbsp;※ 聚合和窗口函数
&nbsp;&nbsp;※ 递归CTE
- **链接**：
&nbsp;&nbsp;※ [The Internals of PostgreSQL](http：//www.interdb.jp/pg/index.html) for database administrators and system developers
&nbsp;&nbsp;※ [PL/pgSQL Guide](https：//www.postgresql.org/docs/current/plpgsql.html)

###### 了解Postgres故障排除技术
获得有关故障排除工具的基本知识，并获得有关如何检测和解决问题的实用技能。

- **操作系统工具**
&nbsp;&nbsp;※ `top (htop，atop)`
&nbsp;&nbsp;※ `sysstat`
&nbsp;&nbsp;※ `iotop`
- **Postgres系统视图**
&nbsp;&nbsp;※ `pg_stat_activity`
&nbsp;&nbsp;※ `pg_stat_statements`
- **Postgres工具**
&nbsp;&nbsp;※ `pgcenter` - 个人推荐
- **查询分析**：
&nbsp;&nbsp;※ [EXPLAIN](https：//www.postgresql.org/docs/current/sql-explain.html)
&nbsp;&nbsp;※ [Depesz](https：//explain.depesz.com/) online EXPLAIN visualization tool
&nbsp;&nbsp;※ [PEV](https：//tatiyants.com/pev/#/plans) online EXPLAIN visualization tool
&nbsp;&nbsp;※ [Tensor](https：//explain.tensor.ru/) online EXPLAIN visualization tool，RU language only
- **日志分析**：
&nbsp;&nbsp;※ `pgBadger`
&nbsp;&nbsp;※ Ad-hoc analyzing using `grep，awk，sed`，etc.
- **外部跟踪/性能分析工具**：`gdb，strace，perf-tools，ebpf`，core dumps
- **故障排除方法**： USE，RED，Golden signals
- **链接**：
&nbsp;&nbsp;※ [Linux Performance](http：//www.brendangregg.com/linuxperf.html) by Brendan Gregg
&nbsp;&nbsp;※ [USE Method](http：//www.brendangregg.com/usemethod.html)

###### 了解SQL优化技术
了解有关如何优化SQL查询的知识和实践技能。
- **索引，及其用例**：B-tree，Hash，GiST，SP-GiST，GIN，BRIN
- SQL查询模式和反模式
- SQL模式设计模式和反模式
- **链接**：
&nbsp;&nbsp;※ [Use the Index，Luke](https://use-the-index-luke.com/) - a Guide to Database Performance for Developers
- **书籍**：
&nbsp;&nbsp;※ SQL Antipatterns： Avoiding the Pitfalls of Database Programming - Bill Karwin，2010

###### 培养架构师技能
深入了解Postgres用例以及适合的Postgres用例和不适合的地方。

- **Postgres分支和扩展**： `Greenplum，Timescaledb，Citus，Postgres-XL`，etc.
- RDBMS概述，优点和局限性
- Postgres与其他RDBMS和NoSQL数据库之间的区别

###### 开发Postgres黑客技能
参与Postgres社区并为Postgres做出贡献； 成为Postgres和开源社区的有用成员； 利用个人经验来帮助他人。

- 每日阅读和答复邮件[列表](https://www.postgresql.org/list/)
&nbsp;&nbsp;※ pgsql-general
&nbsp;&nbsp;※ pgsql-admin
&nbsp;&nbsp;※ pgsql-performance
&nbsp;&nbsp;※ pgsql-hackers
&nbsp;&nbsp;※ pgsql-bugs
- 查看补丁
- 编写补丁，参加[庆典](https://commitfest.postgresql.org/)