/*
JSON vs Object Table - Summary

Feature                                        JSON                                                 Object Table

what it is                                     Text format for storing/transferring data            Structured storage system(usually in databases)

Usage                                          For APIs, config, and communication                  For querying and persistent data-storage

Structure                                      Key-value pairs                                      Rows and Columns(SQL) or Documents (NoSQL)
  
Lnguage Support                                Universal(JavaScript, Python, etc)                   Depends on DB engine(SQL, MongoDB, etc.)

Editable by humans?                            Yes                                                  Usually via queries or admin tools

Supports functions                             No                                                   Sometimes(e.g. SQL, functions, triggers)


**Syntax difference

Definition                                    Text format for storing & transferring data          In-memory data structure used in code

Quotes for keys                               Mandatory double quotes("key")                       Optimal quotes-can use key, 'key', or "key"

String Values                                 Must use double quotes only                          Can use single or double quotes

Functions allowed?                            No                                                   Yes

Comments allowed?                             No                                                   Yes

Data types allowed                            string, numer, boolean, null, object, arraay         Everything JSON allows + functions, symbols, undefined, etc

Usage                                         For APIs, config files, and storage                  For logic inside JS programs