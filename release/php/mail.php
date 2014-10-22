<?php
	if($_GET) {
		$name = htmlspecialchars($_GET['name']);
		$mail = htmlspecialchars($_GET['mail']);
		$phone = htmlspecialchars($_GET['phone']);
		$msg = htmlspecialchars($_GET['text']);
		$to = 'info@nexus-studio.ru';
		
		$msg .= '
Имя: '.$name.'
Телефон: '.$phone.'
E-mail: '.$mail;

		$result = mail($to, "Обратная связь!", $msg);
		
		if($result) {
			echo 'Принято к доставке!';
		} else {
			echo 'Не принято к доставке!';
		}
	} else {
		echo 'not data!';
	}