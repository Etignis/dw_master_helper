var oSources = {
  "PHB": {
		"text": {
			"en": {
				"title": "Palyers Handbook"
			},
			"ru": {
				"title": "Книга игрока"
			}
		},
		"checked": false,
		"visible": true
	},
	"DMG": {
		"text": {
			"en": {
				"title": "Dungeon Master Guide"
			},
			"ru": {
				"title": "Книга мастера"
			}
		},
		"checked": false,
		"visible": false
	},
	"ToA": {
		"text": {
			"en": {
				"title": "Tomb of Annihilation"
			},
			"ru": {
				"title": "Гробница Аннигиляции"
			}
		},
		"checked": false,
		"visible": false
	},
	"XGTE": {
		"text": {
			"en": {
				"title": "Xanathar's Guide to Everything"
			},
			"ru": {
				"title": "Справочник Занатара Обо Всем"
			}
		},
		"checked": false,
		"visible": true
	},
	"MToF": {
		"text": {
			"en": {
				"title": "Mordenkainen's Tome of Foes"
			},
			"ru": {
				"title": "Mordenkainen's Tome of Foes"
			}
		},
		"checked": false,
		"visible": false
	},
	"WGtE": {
		"text": {
			"en": {
				"title": "Wayfinder's Guide to Eberron"
			},
			"ru": {
				"title": "Wayfinder's Guide to Eberron"
			}
		},
		"checked": false,
		"visible": false
	},
	"PSK": {
		"text": {
			"en": {
				"title": "Plane Shift: Kaladesh"
			},
			"ru": {
				"title": "Plane Shift: Kaladesh"
			}
		},
		"checked": false,
		"visible": false
	},
	"PSI": {
		"text": {
			"en": {
				"title": "Plane Shift: Ixalan"
			},
			"ru": {
				"title": "Plane Shift: Ixalan"
			}
		},
		"checked": false,
		"visible": false
	},
	"UA": {
		"text": {
			"en": {
				"title": "Unearthed Arcana"
			},
			"ru": {
				"title": "Unearthed Arcana"
			}
		},
		"checked": false,
		"visible": false
	}
}

var oPactTypes = {
	"blade": {
		"text": {
			"en": {
				"title": "Blade"
			},
			"ru": {
				"title": "Клинка"
			}
		},
		"checked": false,
		"visible": true
	},
	"chain": {
		"text": {
			"en": {
				"title": "Chain"
			},
			"ru": {
				"title": "Цепи"
			}
		},
		"checked": false,
		"visible": true
	},
	"book": {
		"text": {
			"en": {
				"title": "Book"
			},
			"ru": {
				"title": "Гримуара"
			}
		},
		"checked": false,
		"visible": true
	}
}

var oSpellTypes = {
	"hex": {
		"text": {
			"en": {
				"title": "Hex"
			},
			"ru": {
				"title": "Сглаз"
			}
		},
		"checked": false,
		"visible": true
	},
	"blast": {
		"text": {
			"en": {
				"title": "Eldrich Blast"
			},
			"ru": {
				"title": "Мистический выстрел"
			}
		},
		"checked": false,
		"visible": true
	}
}

var oLanguages = {
	"en": {
		"text": {
			"en": {
				"title": "English"
			},
			"ru": {
				"title": "Английский"
			}
		},
		"visible": true
	},
	"ru": {
		"text": {
			"en": {
				"title": "Russian"
			},
			"ru": {
				"title": "Русский"
			}
		},
		"checked": true,
		"visible": true
	}
}

var oSort = {
	"typeAlpha": {
		"text": {
			"en": {
				"title": "By level & alphabet"
			},
			"ru": {
				"title": "По уровню и алфавиту"
			}
		},
		"checked": true,
		"visible": true
	},
	"alpha": {
		"text": {
			"en": {
				"title": "By alphabet"
			},
			"ru": {
				"title": "По алфавиту"
			}
		},
		"visible": true
	}
}

var oView = {
	"card": {
		"text": {
			"en": {
				"title": "Cards"
			},
			"ru": {
				"title": "Карточки"
			}
		},
		"checked": true,
		"visible": true
	},
	"text": {
		"text": {
			"en": {
				"title": "Text"
			},
			"ru": {
				"title": "Текст"
			}
		},
		"visible": true
	}
}

var oDict = {
	"pact": {
		"text": {
			"en": {
				"title": "pact of "
			},
			"ru": {
				"title": "договор "
			}
		}
	},
	"level": {
		"text": {
			"en": {
				"title": "min lvl: "
			},
			"ru": {
				"title": "уровень "
			}
		}
	},
	"spell": {
		"text": {
			"en": {
				"title": "to know spell "
			},
			"ru": {
				"title": "умение "
			}
		}
	},
	
	"pactText": {
		"text": {
			"en": {
				"title": "Pact"
			},
			"ru": {
				"title": "Договор"
			}
		}
	},
	"levelText": {
		"text": {
			"en": {
				"title": "Min lvl: "
			},
			"ru": {
				"title": "Уровень"
			}
		}
	},
	
	"spellText": {
		"text": {
			"en": {
				"title": "Abilyty"
			},
			"ru": {
				"title": "Умение"
			}
		}
	}
}

var allItems = [
	{
		"en": {
			"name": "Witch Sight",
			"text": "You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.",
			"source": "PHB",
			"minLevel": "15"
		},
		"ru": {
			"name": "Ведьмачий Взор",
			"text": "Вы можете видеть истинный облик всех перевёртышей и существ, скрытых магией школы Иллюзия или Преобразование, и находящихся в вашей линии обзора, и при этом в пределах 30 футов от вас."
		}
	},
	{
		"en": {
			"name": "Gaze of Two Minds",
			"text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. W hile perceiving through the other creature’s senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings.",
			"source": "PHB"
		},
		"ru": {
			"name": "Взор Двух Умов",
			"text": "Вы можете действием коснуться согласного гуманоида и до конца своего следующего хода воспринимать всё его чувствами. Пока существо находится на том же плане существования, что и вы, вы можете в последующие ходы действием продлевать эту связь до конца своего следующего хода. При восприятии чувствами другого существа, вы получаете все преимущества от особых чувств, которыми обладает это существо, а сами при этом слепы и глухи.	"
		}
	},
	{
		"en": {
			"name": "Visions of Distant Realms",
			"text": "You can cast arcane eye at will, without expending a spell slot.",
			"source": "PHB",
			"minLevel": "15"
		},
		"ru": {
			"name": "Видения Далёких Королевств",
			"text": "Вы можете неограниченно накладывать заклинание магический глаз, не тратя ячейки заклинаний."
		}
	},
	{
		"en": {
			"name": "Thief of Five Fates",
			"text": "You can cast bane once using a w arlock spell slot. You can’t do so again until you finish a long rest.",
			"source": "PHB"
		},
		"ru": {
			"name": "Вор Пяти Судеб",
			"text": "Вы можете один раз сотворить заклинание порча, используя ячейку заклинаний колдуна. Вы не можете сделать это повторно, пока не окончите продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "Ascendant Step",
			"text": "You can cast levitate on yourself at will, without expending a spell slot or material com ponents.",
			"source": "PHB",
			"minLevel": "9"
		},
		"ru": {
			"name": "Восходящий Шаг",
			"text": "	Вы можете неограниченно накладывать на себя заклинание левитация, не тратя ячейки заклинаний и материальные компоненты."
		}
	},
	{
		"en": {
			"name": "Eyes of the Rune Keeper",
			"text": "You can read all writing.",
			"source": "PHB"
		},
		"ru": {
			"name": "Глаза Хранителя Рун",
			"text": "Вы можете читать любые письмена."
		}
	},	
	{
		"en": {
			"name": "Voice of the Chain Master",
			"text": "You can com m unicate telepathically with your familiar and perceive through your fam iliar’s senses as long as you are on the same plane of existence. Additionally, while perceiving through your fam iliar’s senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech.",
			"source": "PHB",
			"minLevel": "",
			"pactType": "chain"
		},
		"ru": {
			"name": "Глас Цепного Мастера",
			"name": "Глас Мастера Цепей",
			"text": "Вы можете телепатически общаться со своим фамильяром и воспринимать всё чувствами фамильяра, пока вы находитесь на одном и том же плане существования. Кроме того, когда вы воспринимаете чувствами фамильяра, вы можете говорить через него своим собственным голосом, даже если фамильяр не способен говорить."
		}
	},
	{
		"en": {
			"name": "Armor of Shadows",
			"text": "You can cast mage armor on yourself at will, without expending a spell slot or material components.",
			"source": "PHB"
		},
		"ru": {
			"name": "Доспех Теней",
			"text": "Вы можете неограниченно накладывать на себя заклинание доспехи мага, не тратя ячейки заклинаний и материальные компоненты."
		}
	},
	{
		"en": {
			"name": "Devil’s Sight",
			"text": "You can see normally in darkness, both magical and nonm agical, to a distance of 120 feet.",
			"source": "PHB"
		},
		"ru": {
			"name": "Дьявольский Взгляд",
			"text": "Вы можете нормально видеть в темноте, как магической, так и немагической, на расстоянии 120 футов."
		}
	},
	{
		"en": {
			"name": "Thirsting Blade",
			"text": "You can attack with your pact w eapon twice, instead of once, whenever you take the Attack action on your turn.",
			"source": "PHB",
			"minLevel": "5",
			"pactType": "blade"
		},
		"ru": {
			"name": "Жаждущий Клинок",
			"text": "Вы можете атаковать своим оружием договора два раза вместо одного, когда в свой ход используете действие Атака."
		}
	},
	{
		"en": {
			"name": "Beast Speech",
			"text": "You can cast speak with animals at will, without expending a spell slot.",
			"source": "PHB"
		},
		"ru": {
			"name": "Животная Речь",
			"text": "Вы можете неограниченно накладывать заклинание разговор с животными, не тратя ячейки заклинаний."
		}
	},
	{
		"en": {
			"name": "Bewitching Whispers",
			"text": "You can cast compulsion once using a w arlock spell slot. You can’t do so again until you finish a long rest.",
			"source": "PHB",
			"minLevel": "7"
		},
		"ru": {
			"name": "Завораживающий Шёпот",
			"text": "Вы можете один раз сотворить заклинание принуждение, используя ячейку заклинаний колдуна. Вы не можете сделать это повторно, пока не окончите продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "Sign of Ill Omen",
			"text": "You can cast bestow curse once using a w arlock spell slot. You can’t do so again until you finish a long rest.",
			"source": "PHB",
			"minLevel": "5"
		},
		"ru": {
			"name": "Знак Дурного Предзнаменования",
			"text": "Вы можете один раз сотворить заклинание проклятие, используя ячейку заклинаний колдуна. Вы не можете сделать это повторно, пока не окончите продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "Book of Ancient Secrets",
			"text": "You can now inscribe m agical rituals in your B ook of Shadows. C hoose tw o 1st-level spells that have the ritual tag from any class’s spell list. The spells appear in the book and don’t count against the number of spells you know. With your B ook of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by som e other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag. On your adventures, you can add other ritual spells to your B ook o f Shadows. W hen you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your w arlock level (rounded up) and if you can spare the time to transcribe the spell. For each level o f the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.",
			"source": "PHB",
			"minLevel": "",
			"pactType": "book"
		},
		"ru": {
			"name": "Книга Древних Секретов",
			"text": "Теперь вы можете вписывать магические ритуалы в свою Книгу Теней. Выберите два заклинания 1 уровня с ключевым словом «ритуал» из списков заклинаний любых классов. Эти заклинания появляются в книге и не учитываются в общем количестве заклинаний, которые вы можете знать. Держа Книгу Теней в руке, вы можете творить выбранные заклинания как ритуалы. Вы не можете творить заклинания иначе как ритуалом, если вы не узнали их иным способом. Вы также можете творить известные заклинания колдуна как ритуалы, если у них есть ключевое слово «ритуал». Во время приключений вы можете добавлять другие ритуальные заклинания в свою Книгу Теней. Когда вы найдёте такое заклинание, вы можете добавить его в книгу, если уровень заклинания не превышает половину вашего уровня колдуна (округляя в большую сторону) и если вы можете потратить время на переписывание заклинания. За каждый уровень заклинания время переписывания занимает 2 часа и стоит 50 золотых монет, которые должны быть потрачены на редкие чернила, необходимые для записи."
		}
	},
	{
		"en": {
			"name": "Mask of Many Faces",
			"text": "You can cast disguise self at will, without expending a spell slot.",
			"source": "PHB"
		},
		"ru": {
			"name": "Маска Многих Лиц",
			"text": "Вы можете неограниченно накладывать заклинание маскировка, не тратя ячейки заклинаний."
		}
	},
	{
		"en": {
			"name": "Master of Myriad Forms",
			"text": "You can cast alter self at will, without expending a spell slot.",
			"source": "PHB",
			"minLevel": "15"
		},
		"ru": {
			"name": "Мастер Бесчисленных Обликов",
			"text": "Вы можете неограниченно накладывать заклинание смена обличья, не тратя ячейки заклинаний."
		}
	},
	{
		"en": {
			"name": "Eldritch Spear",
			"text": "When you cast eldritch blast, its range is 300 feet.",
			"source": "PHB",
			"minLevel": "",
			"spellType": "blast"
		},
		"ru": {
			"name": "Мистическое Копьё",
			"text": "Когда вы накладываете мистический заряд, его дистанция равна 300 футам."
		}
	},
	{
		"en": {
			"name": "Agonizing Blast",
			"text": "When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.",
			"source": "PHB",
			"minLevel": "",
			"spellType": "blast"
		},
		"ru": {
			"name": "МУЧИТЕЛЬНЫЙ ВЗРЫВ",
			"text": "Когда вы накладываете мистический заряд, добавьте модификатор Харизмы к урону, причиняемому при попадании."
		}
	},
	{
		"en": {
			"name": "Whispers of the Grave",
			"text": "You can cast speak with dead at will, without expending a spell slot.",
			"source": "PHB",
			"minLevel": "9"
		},
		"ru": {
			"name": "Могильный Шёпот",
			"text": "Вы можете неограниченно накладывать заклинание разговор с мёртвыми, не тратя ячейки заклинаний."
		}
	},
	{
		"en": {
			"name": "Fiendish Vigor",
			"text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material com ponents.",
			"source": "PHB"
		},
		"ru": {
			"name": "Мощь Исчадия",
			"text": "Вы можете неограниченно накладывать на себя заклинание псевдожизнь как заклинание 1 уровня, не тратя ячейки заклинаний и материальные компоненты."
		}
	},
	{
		"en": {
			"name": "Beguiling Influence",
			"text": "You gain proficiency in the Deception and Persuasion skills.",
			"source": "PHB"
		},
		"ru": {
			"name": "Обманчивое Влияние",
			"text": "Вы получаете владение навыками Обман и Убеждение."
		}
	},
	{
		"en": {
			"name": "One with Shadows",
			"text": "W hen you are in an area of dim light or darkness, you can use your action to becom e invisible until you move or take an action or a reaction.",
			"source": "PHB",
			"minLevel": "5"
		},
		"ru": {
			"name": "Один Среди Теней",
			"text": "Когда вы находитесь в области тусклого света или в темноте, вы можете действием стать невидимым, пока вы не переместитесь или не используете действие или реакцию."
		}
	},
	{
		"en": {
			"name": "Repelling Blast",
			"text": "When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line.",
			"source": "PHB",
			"minLevel": "",
			"spellType": "blast"
		},
		"ru": {
			"name": "Отталкивающий Заряд",
			"text": "Если вы попадаете по существу мистическим зарядом, вы можете толкнуть его на 10 футов прочь от себя по прямой линии."
		}
	},
	{
		"en": {
			"name": "Otherworldly Leap",
			"text": "You can cast jump on yourself at will, without expending a spell slot or material com ponents.",
			"source": "PHB",
			"minLevel": "9"
		},
		"ru": {
			"name": "Потусторонний Прыжок",
			"text": "Вы можете неограниченно накладывать на себя заклинание прыжок, не тратя ячейки заклинаний и материальные компоненты."
		}
	},
	{
		"en": {
			"name": "Lifedrinker",
			"text": "When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1).",
			"source": "PHB",
			"minLevel": "12",
			"pactType": "blade"
		},
		"ru": {
			"name": "Пьющий Жизнь",
			"text": "Когда вы попадаете по существу оружием договора, это существо получает дополнительный урон некротической энергией, равный вашему модификатору Харизмы (минимум 1)."
		}
	},	
	{
		"en": {
			"name": "Sculptor of Flesh",
			"text": "You can cast polymorph once using a w arlock spell slot. You can’t do so again until you finish a long rest.",
			"source": "PHB",
			"minLevel": "7"
		},
		"ru": {
			"name": "Скульптор Плоти",
			"text": "Вы можете один раз сотворить заклинание превращение, используя ячейку заклинаний колдуна. Вы не можете сделать это повторно, пока не окончите продолжительный отдых."
		}
	},	
	{
		"en": {
			"name": "Minions of Chaos",
			"text": "You can cast conjure elemental once using a w arlock spell slot. You can’t do so again until you finish a long rest.",
			"source": "PHB",
			"minLevel": "9"
		},
		"ru": {
			"name": "Слуги Хаоса",
			"text": "Вы можете один раз сотворить заклинание призыв элементаля, используя ячейку заклинаний колдуна. Вы не можете сделать это повторно, пока не окончите продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "Eldritch Sight",
			"text": "You can cast detect magic at will, without expending a spell slot.",
			"source": "PHB"
		},
		"ru": {
			"name": "Таинственный Взгляд",
			"nic": "мистический Взгляд",
			"text": "Вы можете неограниченно накладывать заклинание обнаружение магии, не тратя ячейки заклинаний."
		}
	},
	{
		"en": {
			"name": "Mire the Mind",
			"text": "You can cast slow once using a w arlock spell slot. You can’t do so again until you finish a long rest.",
			"source": "PHB",
			"minLevel": "5"
		},
		"ru": {
			"name": "Трясина Разума",
			"text": "Вы можете один раз сотворить заклинание замедление, используя ячейку заклинаний колдуна. Вы не можете сделать это повторно, пока не окончите продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "Misty Visions",
			"text": "You can cast silent image at will, without expending a spell slot or material com ponents.",
			"source": "PHB"
		},
		"ru": {
			"name": "Туманные Видения",
			"text": "Вы можете неограниченно накладывать заклинание безмолвный образ, не тратя ячейки заклинаний и материальные компоненты."
		}
	},
	{
		"en": {
			"name": "Dreadful Word",
			"text": "You can cast confusion once using a w arlock spell slot. You can’t do so again until you finish a long rest.",
			"source": "PHB",
			"minLevel": "7"
		},
		"ru": {
			"name": "Ужасающее Слово",
			"text": "Вы можете один раз сотворить заклинание смятение, используя ячейку заклинаний колдуна. Вы не можете сделать это повторно, пока не окончите продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "Chains of Carceri",
			"text": "You can cast hold monster at w ill—targeting a celestial, fiend, or elemental—without expending a spell slot or material com ponents. You must finish a long rest before you can use this invocation on the sam e creature again.",
			"source": "PHB",
			"minLevel": "15",
			"pactType": "chain"
		},
		"ru": {
			"name": "Цепи Карцери",
			"text": "Вы можете неограниченно накладывать заклинание удержание чудовища, если цель — исчадие, небожитель или элементаль. При этом вы не тратите ячейки заклинаний и материальные компоненты. Вы должны закончить продолжительный отдых, прежде чем снова сможете использовать это заклинание против этого же существа."
		}
	},
	{
		"en": {
			"name": "ASPECT OF THE MOON",
			"text": "You no longer need to sleep and can't be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading your Book of Shadows and keeping watch.",
			"source": "XGTE",
			"minLevel": "",
			"pactType": "book"
		},
		"ru": {
			"name": "Аспект Луны",
			"text": "Вам больше не нужно спать и вас невозможно усыпить любым способом. Чтобы получить преимущества продолжительного отдыха, вы можете потратить все 8 часов на легкую деятельность, например, прочитать свою Книгу Теней и постоять на страже."
		}
	},
	{
		"en": {
			"name": "RELENTLESS HEX",
			"text": "Your curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see within 5 feet of the target cursed by your hex spell or by a warlock feature of yours, such as Hexblade's Curse or Sign oflll Omen. To teleport in this way, you must be able to see the cursed target.",
			"source": "XGTE",
			"minLevel": "7",
			"spellType": "hex"
		},
		"ru": {
			"name": "Безжалостное Проклятие",
			"text": "Ваше проклятие создает временную связь между вами и вашей целью. В качестве бонусного действия вы можете магически телепортироваться на расстояние до 30 футов, в незанятое пространство, которое вы можете видеть в пределах 5 футов от цели, проклятой вашим заклинанием сглаз [hex] или вашим умением колдуна, таким как Проклятие Ведьмовского клинка или Знак дурного предзнаменования. Чтобы телепортироваться таким образом, вы должны иметь возможность видеть проклятую цель."
		}
	},
	{
		"en": {
			"name": "MADDENING HEX",
			"text": "As a bonus action, you cause a psychic disturbance around the target cursed by your hex spell or by a warlock feature of yours, such as Hex blade's Curse or Sign of Ill Omen. When you do so, you deal psychic damage to the cursed target and each creature of your choice that you can see within 5 feet of it. The psychic damage equals your Charisma modifier (minimum of 1 damage). To use this invocation, you must be able to see the cursed target, and it must be within 30 feet of you.",
			"source": "XGTE",
			"minLevel": "5",			
			"spellType": "hex"
		},
		"ru": {
			"name": "Безумное Проклятие",
			"text": "В качестве бонусного действия вы вызываете психическое возмущение вокруг цели, проклятого вашим заклинанием сглаз [hex] или вашим умением колдуна, таким как Проклятие Ведьмовского клинка или Знак дурного предзнаменования. Когда вы это делаете, вы наносите психический урон проклятой цели и каждому существу по вашему выбору, которое вы можете видеть в пределах 5 футов от цели. Психический урон равен вашему модификатору Харизмы (минимум 1 урон). Чтобы использовать этот воззвание, вы должны иметь возможность видеть проклятую цель, и она должна находиться в пределах 30 футов от вас."
		}
	},
	{
		"en": {
			"name": "TOMB OF LEVISTUS",
			"text": "As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. Immediately after you take the damage, you gain vulnerability to fire damage, your speed is reduced to 0, and you are incapacitated. These effects, including any remaining temporary bit points, all end when the ice melts.<br> Once you use this invocation, you can't use it again until you finish a short or long rest.",
			"source": "XGTE",
			"minLevel": "5"
		},
		"ru": {
			"name": "Гробница Левистуса",
			"text": "Если вы получаете урон, то в качестве реакции, вы можете покрыть себя льдом, который тает в конце вашего следующего хода. Вы получаете 10 временных хитов за уровень колдуна, которые принимают как можно больше урона, на который вы сделали реакцию. Сразу же после получения урона вы получаете уязвимость к урону огнём, ваша скорость уменьшается до 0, а вы недееспособны. Эти эффекты и любые оставшиеся временные хиты пропадают, когда тает лёд. Использовав это воззвание, вы не сможете использовать его снова, пока не закончите короткий или продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "GIFT OF THE EVER-LIVING ONES",
			"text": "Whenever you regain hit points while your familiar is within 100 feet of you, treat any dice rolled to determine the hit points you regain as having rolled their maximum value for you.",
			"source": "XGTE",
			"minLevel": "",
			"pactType": "chain"
		},
		"ru": {
			"name": "Дар Вечноживых",
			"text": "Всякий раз, когда вы восстанавливаете хиты и ваш фамильяр находится в пределах 100 футов от вас, все кубики, брошенные для восстановления хитов, для вас имеют максимальное значение."
		}
	},
	{
		"en": {
			"name": "GIFT OF THE DEPTHS",
			"text": "You can breathe underwater, and you gain a swimming  speed equal to your walking speed. You can also cast water breathing once without expending a spell slot. You regain the ability to do so when you finish a long rest.",
			"source": "XGTE",
			"minLevel": "5"
		},
		"ru": {
			"name": "Дар Глубин",
			"text": "Вы можете дышать под водой, и вы получаете скорость плавания, равную вашей скорости ходьбы. Вы также можете один раз сотворить дыхание по водой [water breathing], не расходуя ячейку заклинаний. Вы восстанавливаете это умение, когда заканчиваете продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "LANCE OF LETHARGY",
			"text": "Once on each of your turns when you hit a creature with your eldritch blast, you can reduce that creature's speed by 10 feet until the end of your next turn.",
			"source": "XGTE",
			"minLevel": "",
			"spellType": "blast"
		},
		"ru": {
			"name": "Копье Летаргии",
			"text": "Один раз в каждом из ваших ходов, когда вы попадаете по существу мистическим зарядом [eldritch blast], вы можете до конца вашего следующего хода уменьшить его скорость на 10 футов."
		}
	},
	{
		"en": {
			"name": "ELDRITCH SMITE",
			"text": "Once per turn when you hit a creature with your pact weapon, you can expend a warlock spell slot to deal an extra ld8 force damage to the target, plus another ld8 per level of the spell slot, and you can knock the target prone if it is Huge or smaller.",
			"source": "XGTE",
			"minLevel": "5",
			"pactType": "blade"
		},
		"ru": {
			"name": "Мистическая Кара",
			"text": "Один раз за ход, когда вы атакуете существо своим оружием договора, вы можете потратить ячейку заклинаний колдуна, чтобы нанести дополнительные 1к8 урона цели, плюс еще 1к8 за уровень слота заклинания выше первого, также вы можете сбить с ног цель, если она Огромного или меньшего размера."
		}
	},
	{
		"en": {
			"name": "CLOAK OF FLIES",
			"text": "As a bonus action, you can surround yourself with a magical aura that looks like buzzing flies. The aura extends 5 feet from you in every direction, but not through total cover. It lasts until you're incapacitated or you dismiss it as a bonus action. The aura grants you advantage on Charisma (Intimidation) checks but disadvantage on a ll other Charisma checks. Any other creature that starts its turn in the aura takes poison damage equal to your Charisma modifier (minimum of 0 damage). Once you use this invocation, you can't use it again until you finish a short or long rest.",
			"source": "XGTE",
			"minLevel": "5"
		},
		"ru": {
			"name": "Плащ Мух",
			"text": "В качестве бонусного действия вы можете окружить себя волшебной аурой, которая выглядит как множество мух. Аура распространяется на 5 футов от вас во всех направлениях, но не через полное укрытие. Этот эффект длится до тех пор, пока вы не станете недееспособны или не отмените его в качестве бонусного действия. Аура дает вам преимущество на проверки Харизмы (Запугивание), но даёт помеху на все другие проверки Харизмы. Любое другое существо, которое начинает свой ход в ауре, получает урон ядом, равный вашему модификатору Харизмы (минимум 0 урона). Использовав это воззвание, вы не сможете использовать его снова, пока не закончите короткий или продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "TRICKSTER'S ESCAPE",
			"text": "You can cast freedom of movement once on yourself without expending a spell slot. You regain the ability to do so when you finish a long rest. ",
			"source": "XGTE",
			"minLevel": "7"
		},
		"ru": {
			"name": "Побег Обманщика",
			"text": "Вы можете один раз наложить на себя свободу перемещения [freedom of movement], не тратя ячейки заклинаний. Вы восстанавливаете это умение, когда заканчиваете продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "GHOSTLY GAZE",
			"text": "As an action, you gain the ability to see through solid objects to a range of 30 feet. Within that ra nge, you have darkvision if you don't already have it. This special sight lasts for 1 minute or until your concentration ends (as if you were concentrating on a speU). During that time, you perceive objects as ghostly, transparent images. Once you use this invocation, you can't use it againuntil you finish a short or long rest.", 
			"source": "XGTE",
			"minLevel": "7"
		},
		"ru": {
			"name": "Призрачный Взор",
			"nic": "Призрачный взгляд",
			"text": "В качестве действия вы получаете возможность видеть сквозь твердые объекты в радиусе 30 футов. В этом диапазоне у вас есть тёмное зрение, если у вас его ещё нет. Это особое зрение длится 1 минуту или до тех пор, пока ваша концентрация не закончится (как если бы вы концентрировались на заклинании). За это время вы воспринимаете объекты как призрачные, прозрачные изображения. Использовав это воззвание, вы не сможете использовать его снова, пока не закончите короткий или продолжительный отдых."
		}
	},
	{
		"en": {
			"name": "SHROUD OF SHADOW",
			"text": "You can cast invisibility at will, without expending a spelJ slot.",
			"source": "XGTE",
			"minLevel": "15"
		},
		"ru": {
			"name": "Саван Теней",
			"text": "Вы можете неограниченно накладывать заклинание невидимость [invisibility], не тратя ячейки заклинаний."
		}
	},
	{
		"en": {
			"name": "IMPROVED PACT WEAPON",
			"text": "You can use any weapon you summon with your Pact of the Blade feature as a spellcasting focus for your warlock spells. In addition, the weapon gains a +l bonus to its attack and damage rolls, unless it is a magic weapon that already has a bonus to those rolls. Finally, the weapon you conjure can be a shortbow, longbow, light crossbow, or heavy crossbow.",
			"source": "XGTE",
			"minLevel": "",
			"pactType": "blade"
		},
		"ru": {
			"name": "Улучшенное Оружие Договора",
			"text": "Вы можете использовать любое оружие, призванное с помощью умения Договор клинка, в качестве своей заклинательной фокусировки колдуна. Кроме того, это оружие получает +1 бонус к атакам и броскам урона, если это не волшебное оружие, которое уже имеет бонус к этим броскам. Наконец, призванное оружие может быть коротким луком, длинным луком, легким арбалетом или тяжёлым арбалетом."
		}
	},
	{
		"en": {
			"name": "GRASP OF HADAR",
			"text": "Once on each of your turns when you hit a creature with your eldritch blast, you can move that creature in a straight line 10 feet closer to you.",
			"source": "XGTE",
			"minLevel": "",
			"pactType": "blade",
			"spellType": "blast"
		},
		"ru": {
			"name": "Хватка Хадара",
			"text": "Один раз в каждом из ваших ходов, когда вы попадаете по существу мистическим зарядом [eldritch blast], вы можете переместить это существо по прямойлинии на 10 футов ближе к вам."
		}
	},
	
]
