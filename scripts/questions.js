export default {
	model: {
		question: i18n.question_model,
		answers: [
			"former",
			"latter",
			"both",
			"harder"
		],
		results: {},
		nextquestion: {
			"former": "com_type",
			"latter": "fun_type",
			"both": "mix_type",
			"harder": "fxxklang"
		}
	},
	com_type: {
		question: i18n.question_type,
		answers: [
			"former",
			"latter",
			"both"
		],
		results: {
			"latter": "free_python"
		},
		nextquestion: {
			"former": "com_strong",
			"both": "com_mix"
		}
	},
	mix_type: {
		question: i18n.question_type,
		answers: [
			"former",
			"latter"
		],
		results: {},
		nextquestion: {
			"former": "mix_strong",
			"latter": "mix_weak"
		}
	},
	fun_type: {
		question: i18n.question_type,
		answers: [
			"former",
			"latter"
		],
		results: {},
		nextquestion: {
			"former": "fun_strong",
			"latter": "fun_weak"
		}
	},
	com_strong: {
		question: i18n.question_mop,
		answers: [
			"former",
			"latter"
		],
		results: {
			"latter": "new_cpp"
		},
		nextquestion: {
			"former": "com_strong_coin"
		}
	},
	com_strong_coin: {
		question: i18n.question_coin,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "java",
			"latter": "go"
		},
		nextquestion: {}
	},
	com_mix: {
		question: i18n.question_coin,
		answers: [
			"former",
			"latter"
		],
		results: {
			"latter": "zig"
		},
		nextquestion: {
			"former": "com_mix_mbti"
		}
	},
	com_mix_mbti: {
		question: i18n.question_mbti,
		answers: [
			"former",
			"latter"
		],
		results: {
			"latter": "c",
			"former": "cpp"
		},
		nextquestion: {}
	},
	mix_strong: {
		question: i18n.question_coin,
		answers: [
			"former",
			"latter"
		],
		results: {},
		nextquestion: {
			"former": "mix_strong_eot",
			"latter": "mix_strong_mop"
		}
	},
	mix_strong_eot: {
		question: i18n.question_eot,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "kotlin",
			"latter": "fortran"
		},
		nextquestion: {}
	},
	mix_strong_mop: {
		question: i18n.question_mop,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "ts",
			"latter": "rust"
		},
		nextquestion: {}
	},
	mix_weak: {
		question: i18n.question_coin,
		answers: [
			"former",
			"latter"
		],
		results: {},
		nextquestion: {
			"former": "mix_weak_old_mbti",
			"latter": "mix_weak_new_mbti"
		}
	},
	mix_weak_old_mbti: {
		question: i18n.question_mbti,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "ruby",
			"latter": "lua"
		},
		nextquestion: {}
	},
	mix_weak_new_mbti: {
		question: i18n.question_mbti,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "php",
			"latter": "js"
		},
		nextquestion: {}
	},
	fun_strong: {
		question: i18n.question_mbti,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "ocaml",
			"latter": "haskell"
		},
		nextquestion: {}
	},
	fun_weak: {
		question: i18n.question_fruit,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "common_lisp",
			"latter": "elisp"
		},
		nextquestion: {}
	},
	fxxklang: {
		question: i18n.question_fxxklang,
		answers: [
			"former",
			"latter"
		],
		results: {},
		nextquestion: {
			"former": "puzzle",
			"latter": "problem"
		}
	},
	puzzle: {
		question: i18n.question_puzzle,
		answers: [
			"easy",
			"medium",
			"hard",
			"harder"
		],
		results: {
			"easy": "bash",
			"medium": "vb",
			"hard": "sql",
			"harder": "brainfxxk"
		},
		nextquestion: {}
	},
	problem: {
		question: i18n.question_mbti,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "asm"
		},
		nextquestion: {
			"latter": "fxxk_mop"
		}
	},
	fxxk_mop: {
		question: i18n.question_mop,
		answers: [
			"former",
			"latter"
		],
		results: {
			"former": "prolog",
			"latter": "verilog"
		},
		nextquestion: {}
	}
}
