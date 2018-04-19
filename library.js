const COLORS = {
	red: {
		_50:	"#FFEBEE",
		_100:	"#FFCDD2",
		_200:	"#EF9A9A",
		_300:	"#E57373",
		_400:	"#EF5350",
		_500:	"#F44336",
		_600:	"#E53935",
		_700:	"#D32F2F",
		_800:	"#C62828",
		_900:	"#B71C1C",
		_A100:	"#FF8A80",
		_A200:	"#FF5252",
		_A400:	"#FF1744",
		_A700:	"#D50000",
	},
	pink: {
		_50:	'#FCE4EC',
		_100:	'#F8BBD0',
		_200:	'#F48FB1',
		_300:	'#F06292',
		_400:	'#EC407A',
		_500:	'#E91E63',
		_600:	'#D81B60',
		_700:	'#C2185B',
		_800:	'#AD1457',
		_900:	'#880E4F',
		_A100:	'#FF80AB',
		_A200:	'#FF4081',
		_A400:	'#F50057',
		_A700:	'#C51162',
	},
	purple: {
		_50:	'#F3E5F5',
		_100:	'#E1BEE7',
		_200:	'#CE93D8',
		_300:	'#BA68C8',
		_400:	'#AB47BC',
		_500:	'#9C27B0',
		_600:	'#8E24AA',
		_700:	'#7B1FA2',
		_800:	'#6A1B9A',
		_900:	'#4A148C',
		_A100:	'#EA80FC',
		_A200:	'#E040FB',
		_A400:	'#D500F9',
		_A700:	'#AA00FF',
	},
	deep_purple: {
		_50:	'#EDE7F6',
		_100:	'#D1C4E9',
		_200:	'#B39DDB',
		_300:	'#9575CD',
		_400:	'#7E57C2',
		_500:	'#673AB7',
		_600:	'#5E35B1',
		_700:	'#512DA8',
		_800:	'#4527A0',
		_900:	'#311B92',
		_A100:	'#B388FF',
		_A200:	'#7C4DFF',
		_A400:	'#651FFF',
		_A700:	'#6200EA',
	},
	indigo: {
		_50:	'#E8EAF6',
		_100:	'#C5CAE9',
		_200:	'#9FA8DA',
		_300:	'#7986CB',
		_400:	'#5C6BC0',
		_500:	'#3F51B5',
		_600:	'#3949AB',
		_700:	'#303F9F',
		_800:	'#283593',
		_900:	'#1A237E',
		_A100:	'#8C9EFF',
		_A200:	'#536DFE',
		_A400:	'#3D5AFE',
		_A700:	'#304FFE',
	},
	blue: {
		_50:	'#E3F2FD',
		_100:	'#BBDEFB',
		_200:	'#90CAF9',
		_300:	'#64B5F6',
		_400:	'#42A5F5',
		_500:	'#2196F3',
		_600:	'#1E88E5',
		_700:	'#1976D2',
		_800:	'#1565C0',
		_900:	'#0D47A1',
		_A100:	'#82B1FF',
		_A200:	'#448AFF',
		_A400:	'#2979FF',
		_A700:	'#2962FF',
	},
	light_blue: {
		_50:	'#E1F5FE',
		_100:	'#B3E5FC',
		_200:	'#81D4FA',
		_300:	'#4FC3F7',
		_400:	'#29B6F6',
		_500:	'#03A9F4',
		_600:	'#039BE5',
		_700:	'#0288D1',
		_800:	'#0277BD',
		_900:	'#01579B',
		_A100:	'#80D8FF',
		_A200:	'#40C4FF',
		_A400:	'#00B0FF',
		_A700:	'#0091EA',
	},
	cyan: {
		_50:	'#E0F7FA',
		_100:	'#B2EBF2',
		_200:	'#80DEEA',
		_300:	'#4DD0E1',
		_400:	'#26C6DA',
		_500:	'#00BCD4',
		_600:	'#00ACC1',
		_700:	'#0097A7',
		_800:	'#00838F',
		_900:	'#006064',
		_A100:	'#84FFFF',
		_A200:	'#18FFFF',
		_A400:	'#00E5FF',
		_A700:	'#00B8D4',
	},
	teal: {
		_50:	'#E0F2F1',
		_100:	'#B2DFDB',
		_200:	'#80CBC4',
		_300:	'#4DB6AC',
		_400:	'#26A69A',
		_500:	'#009688',
		_600:	'#00897B',
		_700:	'#00796B',
		_800:	'#00695C',
		_900:	'#004D40',
		_A100:	'#A7FFEB',
		_A200:	'#64FFDA',
		_A400:	'#1DE9B6',
		_A700:	'#00BFA5',
	},
	green: {
		_50:	'#E8F5E9',
		_100:	'#C8E6C9',
		_200:	'#A5D6A7',
		_300:	'#81C784',
		_400:	'#66BB6A',
		_500:	'#4CAF50',
		_600:	'#43A047',
		_700:	'#388E3C',
		_800:	'#2E7D32',
		_900:	'#1B5E20',
		_A100:	'#B9F6CA',
		_A200:	'#69F0AE',
		_A400:	'#00E676',
		_A700:	'#00C853',

	},
	light_green: {
		_50:	'#F1F8E9',
		_100:	'#DCEDC8',
		_200:	'#C5E1A5',
		_300:	'#AED581',
		_400:	'#9CCC65',
		_500:	'#8BC34A',
		_600:	'#7CB342',
		_700:	'#689F38',
		_800:	'#558B2F',
		_900:	'#33691E',
		_A100:	'#CCFF90',
		_A200:	'#B2FF59',
		_A400:	'#76FF03',
		_A700:	'#64DD17',
	},
	lime: {
		_50:	'#F9FBE7',
		_100:	'#F0F4C3',
		_200:	'#E6EE9C',
		_300:	'#DCE775',
		_400:	'#D4E157',
		_500:	'#CDDC39',
		_600:	'#C0CA33',
		_700:	'#AFB42B',
		_800:	'#9E9D24',
		_900:	'#827717',
		_A100:	'#F4FF81',
		_A200:	'#EEFF41',
		_A400:	'#C6FF00',
		_A700:	'#AEEA00',
	},
	yellow: {
		_500:	'#FFEB3B',
		_50:	'#FFFDE7',
		_100:	'#FFF9C4',
		_200:	'#FFF59D',
		_300:	'#FFF176',
		_400:	'#FFEE58',
		_500:	'#FFEB3B',
		_600:	'#FDD835',
		_700:	'#FBC02D',
		_800:	'#F9A825',
		_900:	'#F57F17',
		_A100:	'#FFFF8D',
		_A200:	'#FFFF00',
		_A400:	'#FFEA00',
		_A700:	'#FFD600',
	},
	amber: {
		_50:	'#FFF8E1',
		_100:	'#FFECB3',
		_200:	'#FFE082',
		_300:	'#FFD54F',
		_400:	'#FFCA28',
		_500:	'#FFC107',
		_600:	'#FFB300',
		_700:	'#FFA000',
		_800:	'#FF8F00',
		_900:	'#FF6F00',
		_A100:	'#FFE57F',
		_A200:	'#FFD740',
		_A400:	'#FFC400',
		_A700:	'#FFAB00',
	},
	orange: {
		_50:	'#FFF3E0',
		_100:	'#FFE0B2',
		_200:	'#FFCC80',
		_300:	'#FFB74D',
		_400:	'#FFA726',
		_500:	'#FF9800',
		_600:	'#FB8C00',
		_700:	'#F57C00',
		_800:	'#EF6C00',
		_900:	'#E65100',
		_A100:	'#FFD180',
		_A200:	'#FFAB40',
		_A400:	'#FF9100',
		_A700:	'#FF6D00',
	},
	deep_orange: {
		_50:	'#FBE9E7',
		_100:	'#FFCCBC',
		_200:	'#FFAB91',
		_300:	'#FF8A65',
		_400:	'#FF7043',
		_500:	'#FF5722',
		_600:	'#F4511E',
		_700:	'#E64A19',
		_800:	'#D84315',
		_900:	'#BF360C',
		_A100:	'#FF9E80',
		_A200:	'#FF6E40',
		_A400:	'#FF3D00',
		_A700:	'#DD2C00',
	},
	brown: {
		_50:	'#EFEBE9',
		_100:	'#D7CCC8',
		_200:	'#BCAAA4',
		_300:	'#A1887F',
		_400:	'#8D6E63',
		_500:	'#795548',
		_600:	'#6D4C41',
		_700:	'#5D4037',
		_800:	'#4E342E',
		_900:	'#3E2723',
	},
	grey: {
		_50:	'#FAFAFA',
		_100:	'#F5F5F5',
		_200:	'#EEEEEE',
		_300:	'#E0E0E0',
		_400:	'#BDBDBD',
		_500:	'#9E9E9E',
		_600:	'#757575',
		_700:	'#616161',
		_800:	'#424242',
		_900:	'#212121',
	},
	blue_grey: {
		_50:	'#ECEFF1',
		_100:	'#CFD8DC',
		_200:	'#B0BEC5',
		_300:	'#90A4AE',
		_400:	'#78909C',
		_500:	'#607D8B',
		_600:	'#546E7A',
		_700:	'#455A64',
		_800:	'#37474F',
		_900:	'#263238',
	},
	black: "#000000",
	white: "#000000",
}