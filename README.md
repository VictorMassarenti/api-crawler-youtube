# api-crawler-youtube

API para Coleta de Dados no YouTube
Esta API foi desenvolvida para facilitar a coleta de dados de vídeos públicos no YouTube. A principal funcionalidade é extrair informações detalhadas de vídeos de um canal específico, incluindo título, link, data de postagem e número de visualizações. O objetivo final é realizar análises comparativas e criar um ranking dos vídeos mais visualizados por hora.

### Funcionalidades

#### 1. Coleta de Dados por Canal

A partir do canal previamente informado, a API realiza uma coleta periódica de todas as informações disponíveis sobre os vídeos desse canal. Essas informações são essenciais para análises posteriores.

#### 2. Armazenamento em Banco de Dados

Os dados coletados são armazenados de forma segura em um banco de dados dedicado. Isso permite uma organização eficiente e a possibilidade de realizar análises históricas ao longo do tempo.

#### 3. Comparação Horária

A API executa uma comparação entre os dados atuais e os armazenados no banco de dados em intervalos regulares, geralmente a cada hora. Essa comparação proporciona insights valiosos sobre as mudanças nas visualizações dos vídeos ao longo do tempo.

#### 4. Ranqueamento por Visualizações por Hora

Com base nas comparações horárias, a API gera um ranking dos vídeos mais visualizados por hora. Isso oferece uma visão clara e atualizada do desempenho dos vídeos, permitindo a identificação dos conteúdos mais populares.
