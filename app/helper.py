import openpyxl

class Handler:
    def __init__(self, path):
        self.wb = openpyxl.load_workbook(path)

    def get_sheet_names(self):
        return self.wb.sheetnames

    def get_topics(self, subject):
        sheet = self.wb["Syllabus"]
        topics = []
        
        code_letter = ""
        topic_letter = ""
        num = 0
        for column in sheet.iter_cols():
            num += 1
            if column[0].value == subject:
                code_letter = chr(ord('@')+num)
                topic_letter = chr(ord('@')+num + 1)
                break
        
        num = 3
        while sheet[code_letter + num.__str__()].value.__str__() != "None":
            topics.append((sheet[code_letter + num.__str__()].value, sheet[topic_letter + num.__str__()].value))
            num += 1

        for i in range(0, len(topics)):
            topics[i] = "<label><input type=\"checkbox\" class=\"topic\", value = \"" + topics[i][0] + "\" onclick=\"sort()\" checked = \"true\"><span>" + topics[i][1] + "</span></label>"

        return topics

    def get_questions(self, sheet_name):
        sheet = self.wb[sheet_name]
        questions = []

        for row in sheet.iter_rows(min_row = 2):
            questions.append(Question(row[0].value, row[1].value, row[2].value, row[3].value, row[4].value, row[5].value))
        
        return questions

class Question:
    def __init__(self, year, january, paper, number, letters, topic):
        self.year = int(year)
        self.january = january
        self.paper = int(paper)
        self.number = int(number)
        self.letters = letters
        self.topic = topic

    def html(self):
        return "<li data-topic = \"" + self.topic + "\">" + self.__str__() + "</li>"
    
    def __str__(self) -> str:
        month = ""
        if self.january == 1:
            month = "January"
        else:
            month = "May/June"
        
        number = ""
        letters = self.letters.split("-")
        for i in range(0, len(letters)):
            if i > 0:
                number += " - "
            number += '#' + self.number.__str__() + '.' + letters[i]
        
        return month + " P" + self.paper.__str__() + ' ' + self.year.__str__() + " " + number
