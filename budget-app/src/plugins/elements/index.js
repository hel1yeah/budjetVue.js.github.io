import Vue from "vue";
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert,
} from "element-ui";

const elements = [Button, Card, Form, FormItem, Input, Select, Option, Alert];

locale.use(lang);

elements.forEach((El) => Vue.use(El, { locale }));
