// // 递归
// // 把复杂问题由多个相同的简单问题，
// // 退出条件

// 1. DOM  树状结构 递归
// 	       body root
// 		.container
// 	.wrap
// div
// 	我的（文本节点）
// 2. Tree
// 				 1
// 		 2      3
// 	4     5
// 			6
// 		null null
// 3. Vue
// 	diff? 算法
//   树状组件

// Vue 你觉得有什么应用的场景？
// diff

package main

import (
	"fmt"
)

type Rectangle struct {
	Length int
	Width  int
}

func (r *Rectangle) Area() int {
	return r.Length * r.Width
}

func main() {
	r := Rectangle{4, 2}
	fmt.Println(r.Area())
}

(defun maple/go-auto-comment()
    (interactive)
    (unless (featurep 'imenu)
      (require 'imenu nil t))
    (let* ((imenu-auto-rescan t)
           (imenu-auto-rescan-maxout (if current-prefix-arg
                                         (buffer-size)
                                       imenu-auto-rescan-maxout))
           (items (imenu--make-index-alist t))
           (items (delete (assoc "*Rescan*" items) items)))
      (cl-mapcan
       (lambda(item)
         (cl-mapcan
          (if (string= (car item) "func")
              'maple/go-func-comment
            'maple/go-type-comment)
          (cdr item)))
       items)))

  (defun maple/go-add-comment(func point)
    (save-excursion
      (goto-char point)
      (forward-line -1)
      (when (not (looking-at (concat "// " func)))
        (end-of-line) (newline-and-indent)
        (insert (concat "// " func " ..")))))

  (defun maple/go-func-comment(f)
    (let ((func (car f)))
      (if (and (string-prefix-p "(" func)
               (string-match "[)] \\(.*\\)[(]\\(.*\\)[)]\\(.*\\)$" func))
          (maple/go-add-comment (match-string 1 func) (cdr f))
        (if (string-match "\\(.*\\)[(]\\(.*\\)[)]\\(.*\\)$" func)
            (maple/go-add-comment (match-string 1 func) (cdr f))
          (maple/go-add-comment (car f) (cdr f))))))

  (defun maple/go-type-comment(f)
    (maple/go-add-comment (car f) (cdr f)))