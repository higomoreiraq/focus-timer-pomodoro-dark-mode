# Focus Timer Pomodoro ⏱ - Dark Mode

Aplicação de um temporizador que aplica a técnica de estudos Pomodoro com a funcionalidade de substituição do tema entre claro e escuro.

- Light mode
![image](https://user-images.githubusercontent.com/107502907/192099263-5a9bbcad-4ea3-4936-bc81-39822f56659a.png)

- Dark mode
![image](https://user-images.githubusercontent.com/107502907/192099287-a5002cf4-0a7d-452f-a938-3e60951e0c8e.png)

## Descrição

Este temporizador tem por finalidade a aplicação da técnica Pomodoro. Uma técnica excelente para ser aplicada durante seus estudos.
Nesta aplicação, também estão inseridas quatro áudios para ouvir junto, enquanto o cronômetro roda. 
Esses áudios são de sons ambientes para ajudar na eliminação de ruídos externos e manter o seu foco apenas na sua atividade.

o Pomodoro consiste em um ciclo de duas horas. A cada 25 minutos, sem interrupções, dedicado a uma tarefa, você deve fazer uma pausa de 5 minutos.
Ao final do ciclo de duas horas, você deverá fazer uma pausa maior de 30 minutos e depois começar um novo Pomodoro.

Nesta aplicação temos por padrão o tempo de 25 minutos em seu display, funcionando através do método "setTimeout()" em seu código. E sempre que apertar o botão "Stop", o temporizador reiniciará para os 25 minutos de padrão e aguardará o comando para iniciar uma nova contagem.

## Funcionalidades:

### Botões de controle:

- botões "Play" e "Pause", alternam suas posições, iniciando a contagem regressiva e interrompendo o tempo, respectivamente;
- botão "Stop" resetando o temporizador e e desativanddo todos os botões de controle pressionados;
- botões "(+)" e "(-)" para adicionar ou remover 5 minutos do temporizador, respectivamente.

### Botões de cards de áudio:

ao lado, possuem cada um, um áudio em loop, de som ambiente do seu respectivo card. São eles:

- Floresta;
- Chuva;
- Cafeteria;
- e Lareira.

### Audios

Ao clicar em qualquer um dos cards, o "soundOff" (mute) é desativado e ativa-se o respectivo áudio selecionado. 
O mesmo procedimento vale para qualquer um dos 4 cards. E ao clicar novamente no botão soundOff, desativa-se novamente o áudio que estiver sendo reproduzido.

Também existe o áudio padrão de botão pressionado, para qualquer um dos botões da aplicação.

Quando o contador chegar em zero, será reproduzido o alarme do áudio KitchenTimer, informando ao usuário que o seu tempo inserido chegou ao fim.
E com um indicador visual, todos os botões de controle também piscam nesse momento por 1 segundo.

## Incrementos

Esse projeto é uma versão otimizada do ***Focus Timer Pomodoro***, contendo duas novas funcionalidades:

- Dark Mode;
- Controle de volume.

No topo da página, encontra-se o botão dark-mode/light-mode, onde ao clicá-lo, muda-se o tema da aplicação, 
intercalando em tema claro e escuro, mantendo-se o mesmo layout, mas com personalizações de cores distintas.

Foi adicionado também em cada card, um input de volume próprio para cada um deles, totalmente independentes. 
A aplicação inicia com o som desligado, indicado pelo seu botão "soundOff" (mute) pressionado.

## Tecnologias utilizadas:

- HTML;
- CSS;
- JavaScript.

## Preview

Para conferir a aplicação, acesse:

- https://higomoreiraq.github.io/focus-timer-pomodoro-dark-mode/

## Contato

[![bio](https://img.shields.io/badge/bio_higomoreiraq-0A3442?style=for-the-badge&logo=ko-fi&logoColor=white)](https://higomoreiraq.github.io/Bio-Higo-Moreira/)

## Screenshots

### Screen 1
Light mode ativado, temporizador iniciado, áudio de chuva ligado e volume do áudio no máximo.

- Versão desktop
![image](https://user-images.githubusercontent.com/107502907/192100237-c6a9eae4-9487-482d-aea9-7bc2cdb95b89.png)

- Versão mobile
![image](https://user-images.githubusercontent.com/107502907/192101079-8fdeaf24-f5f4-4d67-b944-f1d3a2202787.png)

### Screen 2
Dark mode ativado, temporizador iniciado, áudio de chuva ligado e volume do áudio no máximo.

- Versão desktop
![image](https://user-images.githubusercontent.com/107502907/192099991-41876649-a32b-4c84-a81d-90e66a654023.png)

- Versão mobile
![image](https://user-images.githubusercontent.com/107502907/192101063-c04c945e-f362-4d8e-bb80-874d5f41f94f.png)

### Screen 3
Light mode ativado, temporizador encerrado, piscam-se os botões do controlador e o áudio de alarme é ativado.

- Versão desktop
![image](https://user-images.githubusercontent.com/107502907/192100307-e216902e-a4bc-44a5-9f15-ec293c80d15d.png)

- Versão mobile
![image](https://user-images.githubusercontent.com/107502907/192101040-61f1c9cd-e412-4f7a-b19e-ab1546f5bc28.png)

### Screen 4
Dark mode ativado, temporizador encerrado, piscam-se os botões do controlador e o áudio de alarme é ativado.

- Versão desktop
![image](https://user-images.githubusercontent.com/107502907/192100115-f71967d8-bd2f-43e9-aabb-1f742f1bb5c4.png)

- Versão mobile
![image](https://user-images.githubusercontent.com/107502907/192101002-17633cdf-6340-4dbf-a47e-ce2c08cc8a9b.png)


#
# 🌎 English

# Focus Timer Pomodoro ⏱ - Dark Mode

Application of a timer that applies the Pomodoro study technique.

## Description

This timer is intended to apply the Pomodoro technique. An excellent technique to be applied during your studies.
In this application, four audios are also inserted to listen together, while the timer runs.
These audios are of ambient sounds to help eliminate external noise and keep your focus only on your activity.

the Pomodoro consists of a two-hour cycle. Every 25 minutes, without interruption, dedicated to a task, you should take a 5-minute break.
At the end of the two-hour cycle, you should take a longer 30-minute break and then start a new Pomodoro.

In this application we have by default the time of 25 minutes in its display, working through the method "setTimeout()" in its code. And whenever you press the "Stop" button, the timer will reset to the default 25 minutes and wait for the command to start a new count.

## Functionalities:

### Control buttons:

- "Play" and "Pause" buttons, alternate their positions, starting the countdown and stopping the time, respectively;
- "Stop" button resetting the timer and deactivating all pressed control buttons;
- "(+)" and "(-)" buttons to add or remove 5 minutes from the timer respectively.

### Audio card buttons:

to the side, they each have a looped audio, with ambient sound from their respective card. Are they:

- Forest;
- Rain;
- Coffee shop;
- and Fireplace.

### Audios

When clicking on any of the cards, the "soundOff" (mute) is deactivated and the respective selected audio is activated.
The same procedure goes for any of the 4 cards. And when you click the soundOff button again, the audio being played is turned off again.

There is also the standard button-press audio for any of the buttons in the application.

When the counter reaches zero, the KitchenTimer audio alarm will play, informing the user that their entered time has expired.
And with a visual indicator, all control buttons also flash at that time for 1 second.

## increments

This project is an optimized version of ***Focus Timer Pomodoro***, containing two new features:

- Dark Mode;
- Volume control.

At the top of the page, there is the dark-mode/light-mode button, where clicking on it changes the application's theme,
alternating in light and dark theme, keeping the same layout, but with different color customizations.

It was also added to each card, an input of its own volume for each one of them, totally independent.
The application starts with the sound off, indicated by its "soundOff" (mute) button pressed.

## Technologies used:

- HTML;
- CSS;
- JavaScript.

## Preview

To check the application, go to:

- https://higomoreiraq.github.io/focus-timer-pomodoro-dark-mode/

## Contact

[![bio](https://img.shields.io/badge/bio_higomoreiraq-0A3442?style=for-the-badge&logo=ko-fi&logoColor=white)](https://higomoreiraq.github.io/Bio-Higo-Moreira/)

## Screenshots

### Screen 1
Light mode on, timer started, rain audio on and audio volume at maximum. (desktop/mobile)

### Screen 2
Dark mode activated, timer started, rain audio on and audio volume at maximum. (desktop/mobile)

### Screen 3
Light mode activated, timer expired, controller buttons flash and alarm audio is activated. (desktop/mobile)

### Screen 4
Dark mode activated, timer expired, controller buttons flash and alarm audio is activated. (desktop/mobile)
