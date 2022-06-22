const { exportEml } = require("./export");

const dummyData = {
  "elementPath": "",
  "emailCount": 0,
  "folderType": "Generic",
  "id": "c486c9b5-2aa6-4230-b5fe-3f07de46f7ae",
  "name": "Fichier de données Outlook",
  "size": 1,
  "type": "rootFolder",
  "children": [
      {
          "elementPath": "",
          "emailCount": 0,
          "folderType": "Generic",
          "id": "d42b76ef-45c7-4453-aa55-d3cafaadf93e",
          "name": "Début du fichier de données Outlook",
          "size": 1,
          "type": "folder",
          "children": [
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 1,
                  "folderType": "Generic",
                  "id": "6eadc536-fd2c-4bd2-ba58-da1894b4e48a",
                  "name": "Éléments supprimés",
                  "size": 1,
                  "type": "folder",
                  "children": [
                      {
                          "attachementCount": 0,
                          "attachements": [],
                          "bcc": [],
                          "cc": [],
                          "contentHTML": "",
                          "contentRTF": "",
                          "contentText": "Comme planifié, voici le mail présent\r\n",
                          "elementPath": "/Début du fichier de données Outlook",
                          "from": {
                              "email": "lilian.sagetlethias@beta.gouv.fr",
                              "name": "Lilian Saget-Lethias"
                          },
                          "id": "2c78387c-c70b-478f-a6d1-395ec5a5bef8",
                          "isFromMe": false,
                          "name": "Lilian Saget-Lethias ",
                          "receivedDate": "2021-11-02T13:50:32.980Z",
                          "sentTime": "2021-11-02T13:50:18.000Z",
                          "size": 1,
                          "subject": "Bonjour",
                          "to": [
                              {
                                  "email": "liamihcra@outlook.fr",
                                  "name": "Archimail Test"
                              }
                          ],
                          "type": "email"
                      }
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 2,
                  "folderType": "Generic",
                  "id": "c3ca30cf-d754-4af6-b182-976210090ad2",
                  "name": "Boîte de réception",
                  "size": 2,
                  "type": "folder",
                  "children": [
                      {
                          "attachementCount": 0,
                          "attachements": [],
                          "bcc": [],
                          "cc": [],
                          "contentHTML": "",
                          "contentRTF": "",
                          "contentText": "Ok d'accord\r\n\r\nLe mar. 2 nov. 2021 à 14:26, Archimail Test <liamihcra@outlook.fr <mailto:liamihcra@outlook.fr> > a écrit :\r\n\r\n\r\n\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\t\r\n\r\n",
                          "elementPath": "/Début du fichier de données Outlook",
                          "from": {
                              "email": "lilian.sagetlethias@beta.gouv.fr",
                              "name": "Lilian Saget-Lethias"
                          },
                          "id": "df3aabd1-5bd3-4b8c-94f9-201eb3d3e0c8",
                          "isFromMe": false,
                          "name": "Lilian Saget-Lethias ",
                          "receivedDate": "2021-11-02T13:39:31.117Z",
                          "sentTime": "2021-11-02T13:39:16.000Z",
                          "size": 1,
                          "subject": "Re: Au sujet des tests sur Archimail",
                          "to": [
                              {
                                  "email": "liamihcra@outlook.fr",
                                  "name": "Archimail Test"
                              }
                          ],
                          "type": "email"
                      }
                  ],
                  "other": [
                      "IPM.Schedule.Meeting.Resp.Pos"
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "1171aebb-fe26-4e11-9ae1-6c999bedd5dc",
                  "name": "Boîte d'envoi",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 2,
                  "folderType": "Generic",
                  "id": "42a069b7-e601-40eb-8a19-68ee0d720d65",
                  "name": "Éléments envoyés",
                  "size": 2,
                  "type": "folder",
                  "children": [
                      {
                          "attachementCount": 0,
                          "attachements": [],
                          "bcc": [],
                          "cc": [],
                          "contentHTML": "",
                          "contentRTF": "",
                          "contentText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\n",
                          "elementPath": "/Début du fichier de données Outlook",
                          "from": {
                              "email": "/O=FIRST ORGANIZATION/OU=EXCHANGE ADMINISTRATIVE GROUP(FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=00037FFE452521B1",
                              "name": "Archimail Test"
                          },
                          "id": "874f7694-90ea-4b92-8af0-dbc87dbbfe54",
                          "isFromMe": false,
                          "name": "Archimail Test ",
                          "receivedDate": "2021-11-02T13:26:55.717Z",
                          "sentTime": "2021-11-02T13:26:50.207Z",
                          "size": 1,
                          "subject": "Au sujet des tests sur Archimail",
                          "to": [
                              {
                                  "email": "lilian.sagetlethias@beta.gouv.fr",
                                  "name": "lilian.sagetlethias@beta.gouv.fr"
                              }
                          ],
                          "type": "email"
                      }
                  ],
                  "other": [
                      "IPM.Schedule.Meeting.Request"
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "e4d9d3fa-6be1-43db-857c-a22a9f098df4",
                  "name": "Courrier indésirable",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 1,
                  "folderType": "Generic",
                  "id": "b0e27475-5201-48ec-9949-7135f8bb5a42",
                  "name": "Contacts",
                  "size": 1,
                  "type": "folder",
                  "children": [
                      {
                          "elementPath": "/Début du fichier de données Outlook/Contacts",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "5b961ded-26bb-4b6b-a8f1-97bb2220a05d",
                          "name": "Recipient Cache",
                          "size": 1,
                          "type": "folder",
                          "children": [
                              {
                                  "attachementCount": 0,
                                  "attachements": [],
                                  "bcc": [],
                                  "cc": [],
                                  "contentHTML": "",
                                  "contentRTF": "",
                                  "contentText": "Comme planifié, voici le mail présent\r\n",
                                  "elementPath": "/Début du fichier de données Outlook/Contacts",
                                  "from": {
                                      "email": "lilian.sagetlethias@beta.gouv.fr",
                                      "name": "Lilian Saget-Lethias"
                                  },
                                  "id": "2c78387c-c70b-478f-a6d1-395ec5a5bef8",
                                  "isFromMe": false,
                                  "name": "Lilian Saget-Lethias ",
                                  "receivedDate": "2021-11-02T13:50:32.980Z",
                                  "sentTime": "2021-11-02T13:50:18.000Z",
                                  "size": 1,
                                  "subject": "Bonjour ici",
                                  "to": [
                                      {
                                          "email": "liamihcra@outlook.fr",
                                          "name": "Archimail Test"
                                      }
                                  ],
                                  "type": "email"
                              },
                              {
                                  "attachementCount": 0,
                                  "attachements": [],
                                  "bcc": [],
                                  "cc": [],
                                  "contentHTML": "",
                                  "contentRTF": "",
                                  "contentText": "Comme planifié, voici le mail bonjourrrrrrrrrr \r\n",
                                  "elementPath": "/Début du fichier de données Outlook/Contacts",
                                  "from": {
                                      "email": "lilian.sagetlethias@beta.gouv.fr",
                                      "name": "Lilian Saget-Lethias"
                                  },
                                  "id": "2c78387c-c70b-478f-a6d1-395ec5a5bef8",
                                  "isFromMe": false,
                                  "name": "Lilian Saget-Lethias ",
                                  "receivedDate": "2021-11-02T13:50:32.980Z",
                                  "sentTime": "2021-11-02T13:50:18.000Z",
                                  "size": 1,
                                  "subject": "Re-bonjour ici",
                                  "to": [
                                      {
                                          "email": "liamihcra@outlook.fr",
                                          "name": "Archimail Test"
                                      }
                                  ],
                                  "type": "email"
                              },
                          ]
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Contacts",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "a3bedc6e-d999-4476-b260-0c4d0e324b09",
                          "name": "{06967759-274D-40B2-A3EB-D7F9E73727D7}",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Contacts",
                          "emailCount": 1,
                          "folderType": "Generic",
                          "id": "e0374876-0ce1-4294-b45d-0d993f7489b9",
                          "name": "Spéciaux",
                          "size": 1,
                          "type": "folder",
                          "children": [],
                          "other": [
                              "IPM.Contact"
                          ]
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Contacts",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "b053b7d3-7afb-44d5-b581-e5d081f79922",
                          "name": "{A9E2BC46-B3A0-4243-B315-60D991004455}",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Contacts",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "5517d8ab-c50a-4289-840e-4af874574f1a",
                          "name": "Sociétés",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Contacts",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "486297b2-0a88-4542-8a9c-24a57b498f77",
                          "name": "Organizational Contacts",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Contacts",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "a75b9b67-9654-4574-a586-02a1ee723dda",
                          "name": "PeopleCentricConversation Buddies",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Contacts",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "a593438b-a112-4478-a7ea-c9d6beab0914",
                          "name": "GAL Contacts",
                          "size": 1,
                          "type": "folder"
                      }
                  ],
                  "other": [
                      "IPM.Contact"
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "7da39438-3775-4744-9ce6-b75a64ccfae5",
                  "name": "Fichiers",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 1,
                  "folderType": "Generic",
                  "id": "8f738694-4750-447b-8f0e-90b290b1db66",
                  "name": "Calendrier",
                  "size": 1,
                  "type": "folder",
                  "children": [
                      {
                          "elementPath": "/Début du fichier de données Outlook/Calendrier",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "1624e421-2bfc-4f82-b3d0-c3f07b4bb4ee",
                          "name": "Anniversaires",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Calendrier",
                          "emailCount": 70,
                          "folderType": "Generic",
                          "id": "26337f66-61c1-4186-b623-4eae492752d5",
                          "name": "Jours fériés - France",
                          "size": 70,
                          "type": "folder",
                          "children": [],
                          "other": [
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment",
                              "IPM.Appointment"
                          ]
                      }
                  ],
                  "other": [
                      "IPM.Appointment"
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 2,
                  "folderType": "Generic",
                  "id": "e63e4da8-58c7-42de-90c0-408f2ff88d65",
                  "name": "PJs",
                  "size": 2,
                  "type": "folder",
                  "children": [
                      {
                          "attachementCount": 2,
                          "attachements": [
                              {
                                  "filename": "pjtest.txt",
                                  "filesize": 448,
                                  "mimeType": "text/plain"
                              },
                              {
                                  "filename": "pjtest.docx",
                                  "filesize": 6411,
                                  "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                              }
                          ],
                          "bcc": [],
                          "cc": [],
                          "contentHTML": "",
                          "contentRTF": "",
                          "contentText": "cf pj\r\n",
                          "elementPath": "/Début du fichier de données Outlook",
                          "from": {
                              "email": "lilian.sagetlethias@beta.gouv.fr",
                              "name": "Lilian Saget-Lethias"
                          },
                          "id": "c2e732e3-1452-4dbf-8245-6f74111047fc",
                          "isFromMe": false,
                          "name": "Lilian Saget-Lethias ",
                          "receivedDate": "2021-11-02T14:04:57.134Z",
                          "sentTime": "2021-11-02T14:04:42.000Z",
                          "size": 1,
                          "subject": "Quelques petites pièces pour la route",
                          "to": [
                              {
                                  "email": "liamihcra@outlook.fr",
                                  "name": "Archimail Test"
                              }
                          ],
                          "type": "email"
                      },
                      {
                          "attachementCount": 1,
                          "attachements": [
                              {
                                  "filename": "pjtest.png",
                                  "filesize": 4470194,
                                  "mimeType": "image/png"
                              }
                          ],
                          "bcc": [],
                          "cc": [],
                          "contentHTML": "",
                          "contentRTF": "",
                          "contentText": "Voici une image dans un mail\r\n\r\n\r\n",
                          "elementPath": "/Début du fichier de données Outlook",
                          "from": {
                              "email": "lilian.sagetlethias@beta.gouv.fr",
                              "name": "Lilian Saget-Lethias"
                          },
                          "id": "a2877ca9-bc81-4184-b27c-8722d0ff838d",
                          "isFromMe": false,
                          "name": "Lilian Saget-Lethias ",
                          "receivedDate": "2021-11-02T14:02:41.284Z",
                          "sentTime": "2021-11-02T14:02:19.000Z",
                          "size": 1,
                          "subject": "Une petite image pour la route",
                          "to": [
                              {
                                  "email": "liamihcra@outlook.fr",
                                  "name": "Archimail Test"
                              }
                          ],
                          "type": "email"
                      }
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 2,
                  "folderType": "Generic",
                  "id": "f2f85510-3ea7-4612-975b-645f2b2f4a2c",
                  "name": "PersonMetadata",
                  "size": 2,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "0ea891dd-ba1e-45b0-9436-192677d45b1d",
                  "name": "Tâches",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "972bf21e-74fe-49b4-b361-e4e34204a693",
                  "name": "Brouillons",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "73c9e928-9baf-43f4-9e65-3633a0d05932",
                  "name": "Archive",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "ef15205d-b231-41c8-915c-0dc212b6ea3a",
                  "name": "Racine de Yammer",
                  "size": 1,
                  "type": "folder",
                  "children": [
                      {
                          "elementPath": "/Début du fichier de données Outlook/Racine de Yammer",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "dab1f610-8e76-4845-9c9d-0ebdc17658f4",
                          "name": "Inbound",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Racine de Yammer",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "c2716971-7e78-4a5b-bef1-f90483d29290",
                          "name": "Feeds",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Racine de Yammer",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "6244511a-c773-43c9-a5a4-e1d8012ecaa5",
                          "name": "Outbound",
                          "size": 1,
                          "type": "folder"
                      }
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "868e63ad-76f2-4acc-a101-6112582367ce",
                  "name": "Journal",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "82ce6c4b-c17c-4950-8339-4135666cfa89",
                  "name": "Historique des conversations",
                  "size": 1,
                  "type": "folder",
                  "children": [
                      {
                          "elementPath": "/Début du fichier de données Outlook/Historique des conversations",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "5b338444-2d9d-4a4f-a4eb-524a8e05b757",
                          "name": "Discussion d’équipe",
                          "size": 1,
                          "type": "folder"
                      }
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "ad3bce0d-e68c-4a52-80b8-abf26108f9b9",
                  "name": "Notes",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "f10bce5c-7b8d-4257-a809-e82550f8889e",
                  "name": "ExternalContacts",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "11cb2ed1-21a5-4445-a276-b3b8cf5c2ea4",
                  "name": "Conversation Action Settings",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "e4cfed3d-f17f-4d15-aa46-bb2f21770adb",
                  "name": "Problèmes de synchronisation",
                  "size": 1,
                  "type": "folder",
                  "children": [
                      {
                          "elementPath": "/Début du fichier de données Outlook/Problèmes de synchronisation",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "b98f6eca-174c-4c86-b735-3a0d66fefdfc",
                          "name": "Conflits",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Problèmes de synchronisation",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "00c6bc4d-5348-46d9-b6fd-80fd16733f46",
                          "name": "Défaillances locales",
                          "size": 1,
                          "type": "folder"
                      },
                      {
                          "elementPath": "/Début du fichier de données Outlook/Problèmes de synchronisation",
                          "emailCount": 0,
                          "folderType": "Generic",
                          "id": "135a6951-d390-4103-a276-a7f108986f03",
                          "name": "Défaillances du serveur",
                          "size": 1,
                          "type": "folder"
                      }
                  ]
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "21de42f6-95cd-460f-9d6b-cf71a73a39c6",
                  "name": "Flux RSS",
                  "size": 1,
                  "type": "folder"
              },
              {
                  "elementPath": "/Début du fichier de données Outlook",
                  "emailCount": 0,
                  "folderType": "Generic",
                  "id": "bfb580dd-b365-4dba-8739-156743bc14a1",
                  "name": "Paramètres des étapes rapides",
                  "size": 1,
                  "type": "folder"
              }
          ]
      },
      {
          "elementPath": "",
          "emailCount": 0,
          "folderType": "Generic",
          "id": "b0626f5a-d78d-4f78-af7a-615ffb023619",
          "name": "Racine (pour la recherche)",
          "size": 1,
          "type": "folder"
      },
      {
          "elementPath": "",
          "emailCount": -1,
          "folderType": "Generic",
          "id": "c9a8c915-7e15-4bb6-a480-25177c57501c",
          "name": "SPAM Search Folder 2",
          "size": 1,
          "type": "folder"
      }
  ]
}

exportEml(dummyData)