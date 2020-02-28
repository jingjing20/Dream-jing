package main //包
// node_mail go email
import (
	"log"
	"net/smtp"

	"github.com/jordan-wright/email"
)

func main() { // 入口函数
	e := email.NewEmail() // := 定义并且附值
	e.From = "王志浩 <1269928993@qq.com>"
	// [] ? Array? 多个用户发邮件 { }集合
	// go 静态类型   js 弱类型被认为不安全
	e.To = []string{"1939108122@qq.com", "754211506@qq.com", "1549664680@qq.com", "1269928993@qq.com"}
	e.Subject = "最近在家还好吗？" //标题
	// byte? go 类型 byte  字节流
	// e.Text = []byte("至从考试一别， 已有两月， 我长发已及腿，我想你也是")//内容
	// 链接  多行字符
	e.HTML = []byte(`
	<p>注意休息 保重身体啊！</p>
	<ul>
		<li><a href="https://tuture.co/">图雀社区</a></li>
	</ul>
	`)
	// 本地并没有搭建邮件服务器  由腾讯服务器转发
	e.AttachFile("24k.jpeg") // 附件
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "1269928993@qq.com", "gbxcgwteximahfbi", "smtp.qq.com"))
	if err != nil {
		// console.log()
		// console.error()
		//打印错误 Fatal
		log.Fatal(err)
	}
}
