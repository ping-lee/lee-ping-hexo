---
title: PostgreSQL DBA指南
date: 2021-01-25 18:41:59
tags: [计算机, 数据库]
---

这篇指南的意图是给你一些关于DBA前景的想法，并且在疑惑的时候帮助你学习。图谱或多或少带有个人主张。成为一个DBA要了解图谱所列的全部内容，而不是图谱罗列内容的顺序。

###### 学习 RDBMS 的基本术语和概念
基本了解Postgres关键术语和RDBMS概念。

- **对象模型**: data types, columns, rows, tables, schemas, databases, queries.
- **关系模型**: domains, attributes, tuples, relations, constraints, NULL.
- **数据库高级概念**: ACID, MVCC, transactions, write-ahead log, query processing.
- **链接**: 
&nbsp;&nbsp;※  [Postgres Glossary](https://www.postgresql.org/docs/13/glossary.html)
&nbsp;&nbsp;※  SQL and Relational Theory - Christopher J. Date, 2009
&nbsp;&nbsp;※  Database Design and Relational Theory - Christopher J. Date, 2012

###### 学习安装和运行 PostgreSQL
通过获取安装和运行Postgres的实际技能以备接下来的工作环境下学习。
- 使用包管理器 (APT, YUM, etc.)
- 使用 `docker`.
- Managing Postgres service using systemd (start, stop, restart, reload).
- Managing Postgres service using pg_ctl, or OS-specific tools (like pg_ctlcluster).
- Connect to Postgres using psql.
- Deploy database service in cloud environment (AWS, GCE, Azure, Heroku, DigitalOcean, etc...).
- **Links**:
&nbsp;&nbsp;※ [Official download and install instructions](https://www.postgresql.org/download/)
&nbsp;&nbsp;※ [Official Docker images](https://hub.docker.com/_/postgres)

###### Learn SQL concepts
Get practical skills of how to create and manipulate database objects and how to execute queries using psql client.

- Understand basic data types.
- DML queries: querying data, modifying data, filtering data, joining tables.
&nbsp;&nbsp;※ Advanced topics: transactions, CTE, subqueries, lateral join, grouping, set operations.
- DDL queries: managing tables and schemas (create, alter, drop).
- Import and export data using COPY.
- Links:
&nbsp;&nbsp;※ [DB Fiddle](https://www.db-fiddle.com/)
&nbsp;&nbsp;※ [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
&nbsp;&nbsp;※ [PostgreSQL SQL Getting Started](https://www.postgresql.org/docs/current/tutorial-sql.html)
&nbsp;&nbsp;※ [The SQL Language](https://www.postgresql.org/docs/current/sql.html)
###### Learn how to configure Postgres
Get understanding of the main aspects of how Postgres could be configured. Deep understanding of Postgres internals is not yet necessary here.

- postgresql.conf:
&nbsp;&nbsp;※ Resources usage
&nbsp;&nbsp;※ Write-ahead Log
&nbsp;&nbsp;※ Checkpoints and Background Writer
&nbsp;&nbsp;※ Cost-based vacuum and auto-vacuum
&nbsp;&nbsp;※ Replication
&nbsp;&nbsp;※ Query planner
&nbsp;&nbsp;※ Reporting, logging and statistics
&nbsp;&nbsp;※ Adding extra extensions
&nbsp;&nbsp;※ ...keep exploring other configuration options
- Links:
&nbsp;&nbsp;※ [Postgresqlco.nf](http://postgresqlco.nf/)
###### Learn Postgres security concepts
Get understanding about basic security concepts and common ways of how to deploy secure configurations.

- Authentication models, roles, pg_hba.conf, SSL settings.
- Objects privileges: grant/revoke, default privileges.
- Advanced topics - row-level security, selinux.
- Links:
&nbsp;&nbsp;※ Client authentication
&nbsp;&nbsp;※ Roles and users managements
###### Develop infrastructure DBA skills
Get practical skills of how to deploy, extend, maintain and support Postgres installations and 3rd-party Postgres ecosystem software.

- Replication: streaming replication, logical replication
- Backup/recovery tools:
&nbsp;&nbsp;※ Built-in: pg_dump, pg_dumpall, pg_restore, pg_basebackup
&nbsp;&nbsp;※ 3rd-party: barman, pgbackrest, pg_probackup, WAL-G
&nbsp;&nbsp;※ Backup validation procedures
- Upgrading procedures
&nbsp;&nbsp;※ Minor and major upgrades using pg_upgrade
&nbsp;&nbsp;※ Upgrades using logical replication
- Connection pooling:
&nbsp;&nbsp;※ Pgbouncer
&nbsp;&nbsp;※ Alternatives: Pgpool-II, Odyssey, Pgagroal
- Infrastructure monitoring: Prometheus, Zabbix, other favourite monitoring solution
- High availability and cluster management tools:
&nbsp;&nbsp;※ Patroni
&nbsp;&nbsp;※ Alternatives: Repmgr, Stolon, pg_auto_failover, PAF
- Applications Load Balancing and Service Discovery: Haproxy, Keepalived, Consul, Etcd
- Deploy Postgres on Kubernetes: Simple StatefulSet setup, HELM, operators
- Resource usage and provisioning, capacity planning
###### Learn how to automate routines
Get practical skills, learn automation tools and automate existing routine tasks.

- Automation using shell scripts or any other favourite language (Bash, Python, Perl, etc)
- Configuration management: Ansible, Salt, Chef, Puppet
###### Develop application DBA skills
Learn theory and get practical skills of how applications should work with Postgres.

- Migrations:
&nbsp;&nbsp;※ practical patterns and antipatterns
&nbsp;&nbsp;※ tools: liquibase, sqitch, language-specific tools
- Data import/export, bulk loading and processing
- Queues:
&nbsp;&nbsp;※ practical patterns and anti-patterns
&nbsp;&nbsp;※ Skytools PGQ
- Data partitioning and sharding patterns.
- Database normalization and normal forms.
- Books:
&nbsp;&nbsp;※ The Art of PostgreSQL - Dimitri Fontaine, 2020
###### Learn Postgres advanced topics
Here is important to continuously extend and develop existing knowledge about Postgres.

- Low level internals:
&nbsp;&nbsp;※ Processes and memory architecture
&nbsp;&nbsp;※ Vacuum processing
&nbsp;&nbsp;※ Buffer management
&nbsp;&nbsp;※ Lock management
&nbsp;&nbsp;※ Physical storage and file layout
&nbsp;&nbsp;※ System catalog
- Fine-grained tuning:
&nbsp;&nbsp;※ Per-user, per-database settings
&nbsp;&nbsp;※ Storage parameters
&nbsp;&nbsp;※ Workload-dependant tuning: OLTP, OLAP, HTAP
- Advanced SQL topics:
&nbsp;&nbsp;※ PL/pgSQL, procedures and functions, triggers
&nbsp;&nbsp;※ Aggregate and window functions
&nbsp;&nbsp;※ Recursive CTE
- Links:
&nbsp;&nbsp;※ The Internals of PostgreSQL for database administrators and system developers
&nbsp;&nbsp;※ PL/pgSQL Guide
###### Learn Postgres troubleshooting techniques
Get basic understanding about troubleshooting tools and get practical skills of how to detect and resolve problems.

- Operating system tools
&nbsp;&nbsp;※ top (htop, atop)
&nbsp;&nbsp;※ sysstat
&nbsp;&nbsp;※ iotop
- Postgres system views
&nbsp;&nbsp;※ pg_stat_activity
&nbsp;&nbsp;※ pg_stat_statements
- Postgres tools
&nbsp;&nbsp;※ pgcenter - personal recommendation
- Query analyzing:
&nbsp;&nbsp;※ EXPLAIN
&nbsp;&nbsp;※ Depesz online EXPLAIN visualization tool
&nbsp;&nbsp;※ PEV online EXPLAIN visualization tool
&nbsp;&nbsp;※ Tensor online EXPLAIN visualization tool, RU language only
- Log analyzing:
&nbsp;&nbsp;※ pgBadger
&nbsp;&nbsp;※ Ad-hoc analyzing using grep, awk, sed, etc.
- External tracing/profiling tools: gdb, strace, perf-tools, ebpf, core dumps
&nbsp;&nbsp;※ Troubleshooting methods: USE, RED, Golden signals
- Links:
&nbsp;&nbsp;※ Linux Performance by Brendan Gregg
&nbsp;&nbsp;※ USE Method
###### Learn SQL optimization technics
Get understanding and practical skills of how to optimize SQL queries.

- Indexes, and their use cases: B-tree, Hash, GiST, SP-GiST, GIN, BRIN
- SQL queries patterns and anti-patterns
- SQL schema design patterns and anti-patterns
- Links:
&nbsp;&nbsp;※ Use the Index, Luke - a Guide to Database Performance for Developers
- Books:
&nbsp;&nbsp;※ SQL Antipatterns: Avoiding the Pitfalls of Database Programming - Bill Karwin, 2010
###### Develop architect skills
Get deeper understanding of Postgres use cases and where Postgres is suitable and where is not.

- Postgres forks and extensions: Greenplum, Timescaledb, Citus, Postgres-XL, etc.
- RDBMS in general, benefits and limitations
- Differences between Postgres and other RDBMS and NoSQL databases
###### Develop Postgres hacker skills
Get involved to Postgres community and contribute to Postgres; be a useful member of Postgres, and the open source community; use personal experience to help other people.

- Daily reading and answering in mailing lists
&nbsp;&nbsp;※ pgsql-general
&nbsp;&nbsp;※ pgsql-admin
&nbsp;&nbsp;※ pgsql-performance
&nbsp;&nbsp;※ pgsql-hackers
&nbsp;&nbsp;※ pgsql-bugs
- Reviewing patches
- Writing patches, attending in Commitfests