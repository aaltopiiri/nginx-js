FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
#COPY content /usr/share/nginx/html
EXPOSE 80
ADD conf /etc/nginx/conf.d
#WORKDIR /usr/share/nginx/html
#VOLUME [ "./content:/usr/share/nginx/html" ]
